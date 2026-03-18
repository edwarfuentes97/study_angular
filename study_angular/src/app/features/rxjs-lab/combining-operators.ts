import { Component, signal, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subject, interval, of, combineLatest, forkJoin, Subscription } from 'rxjs';
import { take, map, delay, withLatestFrom, takeUntil } from 'rxjs/operators';

interface LogEntry {
  time: string;
  message: string;
}

@Component({
  selector: 'app-combining-operators',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="lab-header">
      <h2>🔗 Combining Operators</h2>
      <p>combineLatest, forkJoin, and withLatestFrom in action</p>
      <nav class="lab-nav">
        <a routerLink="/lab/rxjs" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Observable Types</a>
        <a routerLink="/lab/rxjs/operators" routerLinkActive="active">Operators</a>
        <a routerLink="/lab/rxjs/search" routerLinkActive="active">Search</a>
        <a routerLink="/lab/rxjs/combining" routerLinkActive="active">Combining</a>
        <a routerLink="/lab/rxjs/memory" routerLinkActive="active">Memory Leaks</a>
      </nav>
    </div>

    <!-- combineLatest -->
    <div class="lab-section">
      <h3>combineLatest</h3>
      <p class="description">Emits whenever any source emits — combines latest values from each. Two interval sources at different speeds.</p>
      <div class="controls">
        <button class="btn btn-primary" (click)="startCombineLatest()" [disabled]="combineRunning()">
          ▶️ Start
        </button>
        <button class="btn btn-danger" (click)="stopCombineLatest()" [disabled]="!combineRunning()">
          ⏹ Stop
        </button>
        <button class="btn" (click)="combineLogs.set([])">Clear Log</button>
      </div>
      <div class="source-info">
        <span class="tag tag-blue">Source A: every 1s</span>
        <span class="tag tag-green">Source B: every 1.5s</span>
      </div>
      <div class="output-log">
        @if (combineLogs().length === 0) {
          <div class="log-entry" style="color: var(--text-muted)">Click Start to begin...</div>
        }
        @for (entry of combineLogs(); track $index) {
          <div class="log-entry">
            <span class="log-time">{{ entry.time }}</span>
            <span>{{ entry.message }}</span>
          </div>
        }
      </div>
    </div>

    <!-- forkJoin -->
    <div class="lab-section">
      <h3>forkJoin</h3>
      <p class="description">Waits for ALL observables to complete, then emits their last values as an array. Simulates 3 parallel HTTP calls.</p>
      <div class="controls">
        <button class="btn btn-primary" (click)="startForkJoin()" [disabled]="forkJoinRunning()">
          🚀 Fire 3 Parallel Requests
        </button>
        <button class="btn" (click)="forkJoinLogs.set([])">Clear Log</button>
      </div>
      <div class="output-log">
        @if (forkJoinLogs().length === 0) {
          <div class="log-entry" style="color: var(--text-muted)">Click to fire 3 parallel requests...</div>
        }
        @for (entry of forkJoinLogs(); track $index) {
          <div class="log-entry">
            <span class="log-time">{{ entry.time }}</span>
            <span>{{ entry.message }}</span>
          </div>
        }
      </div>
    </div>

    <!-- withLatestFrom -->
    <div class="lab-section">
      <h3>withLatestFrom</h3>
      <p class="description">Button click combined with a timer. Only emits when the primary (button) emits, grabbing the latest timer value.</p>
      <div class="controls">
        <button class="btn btn-primary" (click)="startWithLatest()" [disabled]="withLatestRunning()">
          ▶️ Start Timer
        </button>
        <button class="btn" (click)="triggerWithLatest()" [disabled]="!withLatestRunning()">
          🖱️ Click (primary source)
        </button>
        <button class="btn btn-danger" (click)="stopWithLatest()" [disabled]="!withLatestRunning()">
          ⏹ Stop
        </button>
        <button class="btn" (click)="withLatestLogs.set([])">Clear Log</button>
      </div>
      @if (withLatestRunning()) {
        <div class="source-info">
          <span class="tag tag-green">Timer: {{ withLatestTimerValue() }}</span>
          <span class="tag tag-orange">Click the button to grab latest timer value</span>
        </div>
      }
      <div class="output-log">
        @if (withLatestLogs().length === 0) {
          <div class="log-entry" style="color: var(--text-muted)">Start timer, then click the button...</div>
        }
        @for (entry of withLatestLogs(); track $index) {
          <div class="log-entry">
            <span class="log-time">{{ entry.time }}</span>
            <span>{{ entry.message }}</span>
          </div>
        }
      </div>
    </div>
  `,
  styles: `
    :host { display: block; }
    .lab-nav {
      display: flex; gap: 0.5rem; margin-top: 0.6rem; flex-wrap: wrap;
    }
    .lab-nav a {
      padding: 0.3rem 0.7rem; border-radius: 6px; font-size: 0.85rem;
      border: 1px solid var(--border); color: var(--text-muted); text-decoration: none;
      transition: all 0.15s;
    }
    .lab-nav a:hover { border-color: var(--accent-blue); color: var(--text); }
    .lab-nav a.active { background: var(--accent-blue); color: #000; border-color: var(--accent-blue); }

    .description { color: var(--text-muted); font-size: 0.85rem; margin-bottom: 0.6rem; }
    .controls { display: flex; gap: 0.5rem; margin-bottom: 0.6rem; flex-wrap: wrap; }
    .source-info { display: flex; gap: 0.5rem; margin-bottom: 0.5rem; flex-wrap: wrap; }
  `
})
export class CombiningOperatorsComponent implements OnDestroy {
  // combineLatest state
  combineLogs = signal<LogEntry[]>([]);
  combineRunning = signal(false);
  private combineSub: Subscription | null = null;

  // forkJoin state
  forkJoinLogs = signal<LogEntry[]>([]);
  forkJoinRunning = signal(false);

  // withLatestFrom state
  withLatestLogs = signal<LogEntry[]>([]);
  withLatestRunning = signal(false);
  withLatestTimerValue = signal(0);
  private withLatestClick$ = new Subject<void>();
  private withLatestSub: Subscription | null = null;
  private withLatestTimerSub: Subscription | null = null;
  private destroy$ = new Subject<void>();

  // --- combineLatest ---
  startCombineLatest() {
    this.stopCombineLatest();
    this.combineRunning.set(true);
    this.addLog(this.combineLogs, '▶️ Started combineLatest');

    const sourceA$ = interval(1000).pipe(take(8), map(i => `A${i}`));
    const sourceB$ = interval(1500).pipe(take(6), map(i => `B${i}`));

    this.addLog(this.combineLogs, '📡 Source A: interval(1000).pipe(take(8))');
    this.addLog(this.combineLogs, '📡 Source B: interval(1500).pipe(take(6))');

    this.combineSub = combineLatest([sourceA$, sourceB$]).pipe(
      takeUntil(this.destroy$),
    ).subscribe({
      next: ([a, b]) => this.addLog(this.combineLogs, `📦 Combined: [${a}, ${b}]`),
      complete: () => {
        this.addLog(this.combineLogs, '✅ Both sources completed');
        this.combineRunning.set(false);
      },
    });
  }

  stopCombineLatest() {
    this.combineSub?.unsubscribe();
    this.combineSub = null;
    this.combineRunning.set(false);
  }

  // --- forkJoin ---
  startForkJoin() {
    this.forkJoinRunning.set(true);
    this.addLog(this.forkJoinLogs, '🚀 Firing 3 parallel requests...');

    const req1$ = of('Users data').pipe(
      delay(1000),
      map(v => { this.addLog(this.forkJoinLogs, '  ✅ Request 1 done (1s): Users data'); return v; }),
    );
    const req2$ = of('Orders data').pipe(
      delay(2000),
      map(v => { this.addLog(this.forkJoinLogs, '  ✅ Request 2 done (2s): Orders data'); return v; }),
    );
    const req3$ = of('Products data').pipe(
      delay(1500),
      map(v => { this.addLog(this.forkJoinLogs, '  ✅ Request 3 done (1.5s): Products data'); return v; }),
    );

    forkJoin([req1$, req2$, req3$]).pipe(
      takeUntil(this.destroy$),
    ).subscribe({
      next: results => {
        this.addLog(this.forkJoinLogs, `🎉 forkJoin emitted: [${results.join(', ')}]`);
        this.forkJoinRunning.set(false);
      },
    });
  }

  // --- withLatestFrom ---
  startWithLatest() {
    this.stopWithLatest();
    this.withLatestRunning.set(true);
    this.withLatestTimerValue.set(0);
    this.addLog(this.withLatestLogs, '▶️ Timer started (emits every 800ms)');

    const timer$ = interval(800).pipe(takeUntil(this.destroy$));

    this.withLatestTimerSub = timer$.subscribe(val => {
      this.withLatestTimerValue.set(val);
    });

    this.withLatestSub = this.withLatestClick$.pipe(
      withLatestFrom(timer$),
      takeUntil(this.destroy$),
    ).subscribe(([_, timerVal]) => {
      this.addLog(this.withLatestLogs, `🖱️ Click + ⏱️ Timer=${timerVal}  →  Combined: [click, ${timerVal}]`);
    });
  }

  triggerWithLatest() {
    this.withLatestClick$.next();
    this.addLog(this.withLatestLogs, '🖱️ Button clicked');
  }

  stopWithLatest() {
    this.withLatestSub?.unsubscribe();
    this.withLatestTimerSub?.unsubscribe();
    this.withLatestSub = null;
    this.withLatestTimerSub = null;
    if (this.withLatestRunning()) {
      this.withLatestRunning.set(false);
      this.withLatestClick$ = new Subject<void>();
    }
  }

  private addLog(logSignal: typeof this.combineLogs, message: string) {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
      + '.' + String(now.getMilliseconds()).padStart(3, '0');
    logSignal.update(l => [...l, { time, message }]);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.combineSub?.unsubscribe();
    this.withLatestSub?.unsubscribe();
    this.withLatestTimerSub?.unsubscribe();
  }
}
