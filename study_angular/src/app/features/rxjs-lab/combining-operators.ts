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
  templateUrl: './combining-operators.html',
  styleUrl: './combining-operators.css'
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
