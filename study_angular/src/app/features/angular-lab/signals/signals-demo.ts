import {
  Component,
  signal,
  computed,
  effect,
  linkedSignal,
  OnDestroy,
} from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-signals-demo',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="lab-header">
      <h2>⚡ Angular Core Lab</h2>
      <p>Explore Angular's core concepts: change detection, signals, forms, and lazy loading.</p>
    </div>

    <nav class="lab-tabs">
      <a routerLink="/lab/angular" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
        Change Detection
      </a>
      <a routerLink="/lab/angular/signals" routerLinkActive="active">Signals</a>
      <a routerLink="/lab/angular/forms" routerLinkActive="active">Forms</a>
      <a routerLink="/lab/angular/lazy" routerLinkActive="active">Lazy Loading</a>
    </nav>

    <!-- signal() -->
    <section class="lab-section">
      <h3>signal() — Writable Signal</h3>
      <div class="card">
        <p>Counter: <strong class="big-value">{{ counter() }}</strong></p>
        <div class="controls">
          <button class="btn" (click)="decrement()">−</button>
          <button class="btn btn-primary" (click)="increment()">+</button>
          <button class="btn btn-danger" (click)="counter.set(0)">Reset</button>
        </div>
      </div>
    </section>

    <!-- computed() -->
    <section class="lab-section">
      <h3>computed() — Derived Values</h3>
      <div class="card">
        <ul class="derived-list">
          <li>Doubled: <strong>{{ doubled() }}</strong></li>
          <li>Is even: <strong>{{ isEven() ? '✅ Yes' : '❌ No' }}</strong></li>
          <li>Formatted: <strong>{{ formatted() }}</strong></li>
        </ul>
      </div>
    </section>

    <!-- effect() -->
    <section class="lab-section">
      <h3>effect() — Side Effects</h3>
      <div class="card">
        <p class="hint">Change the counter above — each change is logged here via <code>effect()</code>.</p>
        <div class="output-log">
          @for (entry of effectLog(); track $index) {
            <div class="log-entry">
              <span class="log-time">{{ entry.time }}</span>
              {{ entry.message }}
            </div>
          } @empty {
            <div class="log-entry hint">No effect runs yet. Change the counter!</div>
          }
        </div>
      </div>
    </section>

    <!-- linkedSignal() -->
    <section class="lab-section">
      <h3>linkedSignal() — Linked Signal</h3>
      <div class="card">
        <p class="hint">
          A <code>linkedSignal</code> derives its value from a source but can also be written to independently.
          It resets when the source changes.
        </p>
        <p>Source (counter): <strong>{{ counter() }}</strong></p>
        <p>Linked (counter × 10, overridable): <strong class="big-value">{{ linked() }}</strong></p>
        <div class="controls">
          <button class="btn" (click)="linked.set(linked() + 1)">Override +1</button>
          <button class="btn" (click)="linked.set(999)">Set to 999</button>
        </div>
        <p class="hint">Change the counter to see this reset to counter × 10.</p>
      </div>
    </section>

    <!-- toSignal() / toObservable() -->
    <section class="lab-section">
      <h3>toSignal() / toObservable() — RxJS Interop</h3>
      <div class="interop-grid">
        <div class="card">
          <h4>Observable → Signal</h4>
          <p class="hint">An <code>interval(1000)</code> observable converted to a signal with <code>toSignal()</code>.</p>
          <p>Ticks: <strong class="big-value">{{ intervalSignal() ?? '—' }}</strong></p>
        </div>
        <div class="card">
          <h4>Signal → Observable</h4>
          <p class="hint">The counter signal converted to an observable with <code>toObservable()</code>.</p>
          <p>Latest emitted: <strong class="big-value">{{ observableLatest() }}</strong></p>
        </div>
      </div>
    </section>
  `,
  styles: `
    .lab-tabs {
      display: flex; gap: 0.5rem; margin-bottom: 1.5rem;
      border-bottom: 1px solid var(--border); padding-bottom: 0.75rem;
    }
    .lab-tabs a {
      padding: 0.5rem 1rem; border-radius: 6px 6px 0 0;
      color: var(--text-muted); text-decoration: none; font-weight: 500;
      border: 1px solid transparent; transition: all 0.2s;
    }
    .lab-tabs a:hover { color: var(--text); background: var(--bg-card); }
    .lab-tabs a.active {
      color: var(--accent-purple); border-color: var(--border);
      border-bottom-color: var(--bg); background: var(--bg-card);
    }
    .controls { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 0.75rem; }
    .big-value { font-size: 1.5rem; color: var(--accent-blue); }
    .derived-list { list-style: none; padding: 0; margin: 0; }
    .derived-list li { padding: 0.35rem 0; border-bottom: 1px solid var(--border); }
    .derived-list li:last-child { border-bottom: none; }
    .hint { color: var(--text-muted); font-size: 0.85rem; }
    .hint code {
      background: var(--bg-code); padding: 0.1rem 0.35rem;
      border-radius: 4px; font-size: 0.8rem;
    }
    .interop-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .interop-grid h4 { margin: 0 0 0.5rem; color: var(--accent-green); }
    @media (max-width: 700px) { .interop-grid { grid-template-columns: 1fr; } }
  `,
})
export class SignalsDemoComponent implements OnDestroy {
  // ── signal() ──────────────────────────────────────────────────────
  counter = signal(0);

  increment(): void { this.counter.update(v => v + 1); }
  decrement(): void { this.counter.update(v => v - 1); }

  // ── computed() ────────────────────────────────────────────────────
  doubled = computed(() => this.counter() * 2);
  isEven = computed(() => this.counter() % 2 === 0);
  formatted = computed(() => `The counter is ${this.counter()}, doubled = ${this.doubled()}`);

  // ── effect() ──────────────────────────────────────────────────────
  effectLog = signal<{ time: string; message: string }[]>([]);

  private _effect = effect(() => {
    const val = this.counter();
    const now = new Date().toLocaleTimeString();
    // Use untracked update to avoid circular tracking
    this.effectLog.update(log => [
      ...log.slice(-19), // keep last 20 entries
      { time: now, message: `Counter changed to ${val}` },
    ]);
  });

  // ── linkedSignal() ───────────────────────────────────────────────
  linked = linkedSignal(() => this.counter() * 10);

  // ── toSignal() — Observable → Signal ─────────────────────────────
  private readonly tick$ = interval(1000).pipe(map(n => n + 1));
  intervalSignal = toSignal(this.tick$);

  // ── toObservable() — Signal → Observable ─────────────────────────
  observableLatest = signal<number>(0);
  private readonly counterObs$ = toObservable(this.counter);
  private readonly sub: Subscription;

  constructor() {
    this.sub = this.counterObs$.subscribe(val => {
      this.observableLatest.set(val);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
