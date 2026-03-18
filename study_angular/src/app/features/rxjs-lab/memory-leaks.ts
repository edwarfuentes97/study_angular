import { Component, signal, OnDestroy, OnInit, DestroyRef, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subject, interval, Subscription, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

// ─── Child component: ❌ Memory Leak (no cleanup) ───
@Component({
  selector: 'app-leak-child',
  templateUrl: './memory-leaks.html',
})
export class LeakChildComponent implements OnInit {
  counter = signal(0);
  private sub!: Subscription;

  ngOnInit() {
    // ❌ BAD: no unsubscribe!
    this.sub = interval(500).subscribe(val => {
      this.counter.set(val);
      leakTracker.leakCount++;
    });
  }
  // No ngOnDestroy — subscription keeps running!
}

// ─── Child component: ✅ takeUntil pattern ───
@Component({
  selector: 'app-takeuntil-child',
  template: `<span class="tag tag-green">Counter: {{ counter() }} | Subscription active: ✅</span>`,
})
export class TakeUntilChildComponent implements OnInit, OnDestroy {
  counter = signal(0);
  private destroy$ = new Subject<void>();

  ngOnInit() {
    interval(500).pipe(
      takeUntil(this.destroy$),
    ).subscribe(val => {
      this.counter.set(val);
      leakTracker.takeUntilCount++;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    leakTracker.takeUntilActive = false;
  }
}

// ─── Child component: ✅ DestroyRef pattern ───
@Component({
  selector: 'app-destroyref-child',
  template: `<span class="tag tag-green">Counter: {{ counter() }} | Subscription active: ✅</span>`,
})
export class DestroyRefChildComponent implements OnInit {
  counter = signal(0);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    interval(500).pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(val => {
      this.counter.set(val);
      leakTracker.destroyRefCount++;
    });

    this.destroyRef.onDestroy(() => {
      leakTracker.destroyRefActive = false;
    });
  }
}

// ─── Child component: ✅ async pipe ───
@Component({
  selector: 'app-async-child',
  imports: [AsyncPipe],
  template: `<span class="tag tag-green">Counter: {{ counter$ | async }} | Subscription active: ✅</span>`,
})
export class AsyncChildComponent implements OnInit, OnDestroy {
  counter$!: Observable<number>;

  ngOnInit() {
    this.counter$ = interval(500).pipe(
      map(val => {
        leakTracker.asyncCount = val;
        return val;
      }),
    );
    leakTracker.asyncActive = true;
  }

  ngOnDestroy() {
    leakTracker.asyncActive = false;
  }
}

// Simple shared tracker to observe counts from parent
const leakTracker = {
  leakCount: 0,
  takeUntilCount: 0,
  takeUntilActive: true,
  destroyRefCount: 0,
  destroyRefActive: true,
  asyncCount: 0,
  asyncActive: true,
};

@Component({
  selector: 'app-memory-leaks',
  imports: [
    RouterLink, RouterLinkActive,
    LeakChildComponent, TakeUntilChildComponent,
    DestroyRefChildComponent, AsyncChildComponent,
  ],
  template: `
    <div class="lab-header">
      <h2>🧠 Memory Leak Patterns</h2>
      <p>Compare subscription cleanup strategies — toggle components on/off and watch the counters</p>
      <nav class="lab-nav">
        <a routerLink="/lab/rxjs" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Observable Types</a>
        <a routerLink="/lab/rxjs/operators" routerLinkActive="active">Operators</a>
        <a routerLink="/lab/rxjs/search" routerLinkActive="active">Search</a>
        <a routerLink="/lab/rxjs/combining" routerLinkActive="active">Combining</a>
        <a routerLink="/lab/rxjs/memory" routerLinkActive="active">Memory Leaks</a>
      </nav>
    </div>

    <p class="instructions">
      1. Click "Create" to mount each child component &nbsp; 2. Click "Destroy" to unmount &nbsp; 3. Watch the "ticks after destroy" counter
    </p>

    <div class="demos-grid">
      <!-- ❌ Memory Leak -->
      <div class="demo-card card">
        <h3>❌ Memory Leak</h3>
        <p class="description">No unsubscribe in ngOnDestroy. Subscription leaks after component is destroyed.</p>
        <pre><code>// No cleanup!
interval(500).subscribe(val =>
  this.counter = val
);</code></pre>
        <div class="controls">
          <button class="btn btn-primary" (click)="showLeak.set(true)" [disabled]="showLeak()">Create</button>
          <button class="btn btn-danger" (click)="destroyLeak()" [disabled]="!showLeak()">Destroy</button>
        </div>
        <div class="status">
          @if (showLeak()) {
            <app-leak-child />
          } @else {
            <span class="tag tag-orange">Component destroyed</span>
          }
        </div>
        <div class="tracker">
          <span>Ticks after destroy: <strong [style.color]="leakTicksAfterDestroy() > 0 ? 'var(--accent-red)' : 'var(--text-muted)'">{{ leakTicksAfterDestroy() }}</strong></span>
          @if (leakTicksAfterDestroy() > 0) {
            <span class="tag tag-red">⚠️ LEAKING!</span>
          }
        </div>
      </div>

      <!-- ✅ takeUntil -->
      <div class="demo-card card">
        <h3>✅ takeUntil Pattern</h3>
        <p class="description">Uses takeUntil(destroy$) — subscription auto-completes on ngOnDestroy.</p>
        <pre><code>private destroy$ = new Subject();
interval(500).pipe(
  takeUntil(this.destroy$)
).subscribe(...);</code></pre>
        <div class="controls">
          <button class="btn btn-primary" (click)="createTakeUntil()" [disabled]="showTakeUntil()">Create</button>
          <button class="btn btn-danger" (click)="destroyTakeUntil()" [disabled]="!showTakeUntil()">Destroy</button>
        </div>
        <div class="status">
          @if (showTakeUntil()) {
            <app-takeuntil-child />
          } @else {
            <span class="tag tag-orange">Component destroyed</span>
          }
        </div>
        <div class="tracker">
          <span>Ticks after destroy: <strong [style.color]="takeUntilTicksAfterDestroy() > 0 ? 'var(--accent-red)' : 'var(--accent-green)'">{{ takeUntilTicksAfterDestroy() }}</strong></span>
          @if (!showTakeUntil() && takeUntilTicksAfterDestroy() === 0) {
            <span class="tag tag-green">✅ Clean!</span>
          }
        </div>
      </div>

      <!-- ✅ DestroyRef -->
      <div class="demo-card card">
        <h3>✅ DestroyRef Pattern</h3>
        <p class="description">Uses Angular's takeUntilDestroyed(destroyRef) — the cleanest approach.</p>
        <pre><code>private destroyRef = inject(DestroyRef);
interval(500).pipe(
  takeUntilDestroyed(this.destroyRef)
).subscribe(...);</code></pre>
        <div class="controls">
          <button class="btn btn-primary" (click)="createDestroyRef()" [disabled]="showDestroyRef()">Create</button>
          <button class="btn btn-danger" (click)="destroyDestroyRef()" [disabled]="!showDestroyRef()">Destroy</button>
        </div>
        <div class="status">
          @if (showDestroyRef()) {
            <app-destroyref-child />
          } @else {
            <span class="tag tag-orange">Component destroyed</span>
          }
        </div>
        <div class="tracker">
          <span>Ticks after destroy: <strong [style.color]="destroyRefTicksAfterDestroy() > 0 ? 'var(--accent-red)' : 'var(--accent-green)'">{{ destroyRefTicksAfterDestroy() }}</strong></span>
          @if (!showDestroyRef() && destroyRefTicksAfterDestroy() === 0) {
            <span class="tag tag-green">✅ Clean!</span>
          }
        </div>
      </div>

      <!-- ✅ async pipe -->
      <div class="demo-card card">
        <h3>✅ async Pipe</h3>
        <p class="description">Uses the async pipe in template — Angular manages the subscription lifecycle automatically.</p>
        <pre><code>// No manual subscribe!
counter$ = interval(500);

// In template:
{{ '{{ counter$ | async }}' }}</code></pre>
        <div class="controls">
          <button class="btn btn-primary" (click)="createAsync()" [disabled]="showAsync()">Create</button>
          <button class="btn btn-danger" (click)="destroyAsync()" [disabled]="!showAsync()">Destroy</button>
        </div>
        <div class="status">
          @if (showAsync()) {
            <app-async-child />
          } @else {
            <span class="tag tag-orange">Component destroyed</span>
          }
        </div>
        <div class="tracker">
          <span>Ticks after destroy: <strong [style.color]="asyncTicksAfterDestroy() > 0 ? 'var(--accent-red)' : 'var(--accent-green)'">{{ asyncTicksAfterDestroy() }}</strong></span>
          @if (!showAsync() && asyncTicksAfterDestroy() === 0) {
            <span class="tag tag-green">✅ Clean!</span>
          }
        </div>
      </div>
    </div>
  `,
  styleUrl: './memory-leaks.css'
})
export class MemoryLeaksComponent implements OnDestroy {
  showLeak = signal(false);
  showTakeUntil = signal(false);
  showDestroyRef = signal(false);
  showAsync = signal(false);

  leakTicksAfterDestroy = signal(0);
  takeUntilTicksAfterDestroy = signal(0);
  destroyRefTicksAfterDestroy = signal(0);
  asyncTicksAfterDestroy = signal(0);

  private monitorInterval: ReturnType<typeof setInterval> | null = null;
  private leakCountAtDestroy = 0;
  private takeUntilCountAtDestroy = 0;
  private destroyRefCountAtDestroy = 0;
  private asyncCountAtDestroy = 0;

  constructor() {
    this.monitorInterval = setInterval(() => this.updateTrackers(), 300);
  }

  // Leak child
  destroyLeak() {
    this.leakCountAtDestroy = leakTracker.leakCount;
    this.showLeak.set(false);
  }

  // takeUntil child
  createTakeUntil() {
    leakTracker.takeUntilActive = true;
    leakTracker.takeUntilCount = 0;
    this.takeUntilTicksAfterDestroy.set(0);
    this.takeUntilCountAtDestroy = 0;
    this.showTakeUntil.set(true);
  }

  destroyTakeUntil() {
    this.takeUntilCountAtDestroy = leakTracker.takeUntilCount;
    this.showTakeUntil.set(false);
  }

  // DestroyRef child
  createDestroyRef() {
    leakTracker.destroyRefActive = true;
    leakTracker.destroyRefCount = 0;
    this.destroyRefTicksAfterDestroy.set(0);
    this.destroyRefCountAtDestroy = 0;
    this.showDestroyRef.set(true);
  }

  destroyDestroyRef() {
    this.destroyRefCountAtDestroy = leakTracker.destroyRefCount;
    this.showDestroyRef.set(false);
  }

  // async pipe child
  createAsync() {
    leakTracker.asyncActive = true;
    leakTracker.asyncCount = 0;
    this.asyncTicksAfterDestroy.set(0);
    this.asyncCountAtDestroy = 0;
    this.showAsync.set(true);
  }

  destroyAsync() {
    this.asyncCountAtDestroy = leakTracker.asyncCount;
    this.showAsync.set(false);
  }

  private updateTrackers() {
    if (!this.showLeak() && this.leakCountAtDestroy > 0) {
      const diff = leakTracker.leakCount - this.leakCountAtDestroy;
      this.leakTicksAfterDestroy.set(Math.max(0, diff));
    }
    if (!this.showTakeUntil() && this.takeUntilCountAtDestroy > 0) {
      const diff = leakTracker.takeUntilCount - this.takeUntilCountAtDestroy;
      this.takeUntilTicksAfterDestroy.set(Math.max(0, diff));
    }
    if (!this.showDestroyRef() && this.destroyRefCountAtDestroy > 0) {
      const diff = leakTracker.destroyRefCount - this.destroyRefCountAtDestroy;
      this.destroyRefTicksAfterDestroy.set(Math.max(0, diff));
    }
    if (!this.showAsync() && this.asyncCountAtDestroy > 0) {
      const diff = leakTracker.asyncCount - this.asyncCountAtDestroy;
      this.asyncTicksAfterDestroy.set(Math.max(0, diff));
    }
  }

  ngOnDestroy() {
    if (this.monitorInterval) {
      clearInterval(this.monitorInterval);
    }
  }
}
