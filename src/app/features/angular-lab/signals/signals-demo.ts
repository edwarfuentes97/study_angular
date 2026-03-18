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
  templateUrl: './signals-demo.html',
  styleUrl: './signals-demo.css',
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
