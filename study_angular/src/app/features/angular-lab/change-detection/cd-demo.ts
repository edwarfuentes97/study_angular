import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  inject,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// ── Default Strategy Child ──────────────────────────────────────────
@Component({
  selector: 'app-cd-default-child',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div class="card child-card">
      <h4>Default Strategy</h4>
      <p class="check-count">Template checked: <strong>{{ checkCount }}</strong> times</p>
      <p>Counter input: <strong>{{ counter }}</strong></p>
      <p>Object name: <strong>{{ data?.name }}</strong></p>
      <p class="text-muted">Re-renders on <em>every</em> CD cycle, regardless of input changes.</p>
    </div>
  `,
  styles: `
    .child-card { border-left: 3px solid var(--accent-orange); }
    .check-count { color: var(--accent-orange); font-size: 1.25rem; }
    .text-muted { color: var(--text-muted); font-size: 0.85rem; margin-top: 0.5rem; }
    h4 { color: var(--accent-orange); margin: 0 0 0.75rem; }
    p { margin: 0.25rem 0; }
  `,
})
export class CdDefaultChildComponent {
  @Input() counter = 0;
  @Input() data: { name: string } | null = null;

  private _checkCount = 0;

  get checkCount(): number {
    return this._checkCount++;
  }
}

// ── OnPush Strategy Child ───────────────────────────────────────────
@Component({
  selector: 'app-cd-onpush-child',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card child-card">
      <h4>OnPush Strategy</h4>
      <p class="check-count">Template checked: <strong>{{ checkCount }}</strong> times</p>
      <p>Counter input: <strong>{{ counter }}</strong></p>
      <p>Object name: <strong>{{ data?.name }}</strong></p>
      <p class="text-muted">
        Only re-renders when &#64;Input reference changes, events fire, or CD is triggered manually.
      </p>
    </div>
  `,
  styles: `
    .child-card { border-left: 3px solid var(--accent-green); }
    .check-count { color: var(--accent-green); font-size: 1.25rem; }
    .text-muted { color: var(--text-muted); font-size: 0.85rem; margin-top: 0.5rem; }
    h4 { color: var(--accent-green); margin: 0 0 0.75rem; }
    p { margin: 0.25rem 0; }
  `,
})
export class CdOnPushChildComponent {
  @Input() counter = 0;
  @Input() data: { name: string } | null = null;

  private _checkCount = 0;

  get checkCount(): number {
    return this._checkCount++;
  }
}

// ── Parent Demo Component ───────────────────────────────────────────
@Component({
  selector: 'app-cd-demo',
  imports: [RouterLink, RouterLinkActive, CdDefaultChildComponent, CdOnPushChildComponent],
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

    <section class="lab-section">
      <h3>Change Detection Strategies</h3>

      <div class="controls">
        <button class="btn btn-primary" (click)="increment()">Increment Counter</button>
        <button class="btn" (click)="mutateObject()">Mutate Object</button>
        <button class="btn" (click)="replaceObject()">Replace Object</button>
        <button class="btn btn-danger" (click)="triggerCd()">Trigger CD manually</button>
      </div>

      <p class="counter-display">Parent counter: <strong>{{ counter() }}</strong></p>

      <div class="side-by-side">
        <app-cd-default-child [counter]="counter()" [data]="objectRef()" />
        <app-cd-onpush-child  [counter]="counter()" [data]="objectRef()" />
      </div>

      <div class="card explanation">
        <h4>📖 How it works</h4>
        <ul>
          <li><strong>Default:</strong> Angular checks the component on every CD cycle (zone.js events, timers, HTTP, etc.).</li>
          <li><strong>OnPush:</strong> Angular only checks when an &#64;Input reference changes, a DOM event fires inside the component, or <code>markForCheck()</code> / <code>detectChanges()</code> is called.</li>
          <li><strong>Mutate Object:</strong> Changes a property without creating a new reference — OnPush won't detect it.</li>
          <li><strong>Replace Object:</strong> Creates a new reference — OnPush will detect the change.</li>
        </ul>
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
    .controls { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1rem; }
    .counter-display { font-size: 1.1rem; margin-bottom: 1rem; }
    .side-by-side { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
    .explanation { margin-top: 1rem; }
    .explanation h4 { margin: 0 0 0.75rem; color: var(--accent-blue); }
    .explanation ul { margin: 0; padding-left: 1.25rem; }
    .explanation li { margin-bottom: 0.5rem; line-height: 1.5; }
    .explanation code {
      background: var(--bg-code); padding: 0.15rem 0.4rem;
      border-radius: 4px; font-size: 0.85rem;
    }
    @media (max-width: 700px) { .side-by-side { grid-template-columns: 1fr; } }
  `,
})
export class CdDemoComponent {
  private readonly cdRef = inject(ChangeDetectorRef);

  counter = signal(0);
  objectRef = signal<{ name: string }>({ name: 'Angular' });

  increment(): void {
    this.counter.update(c => c + 1);
  }

  mutateObject(): void {
    // Mutate existing reference — OnPush child won't detect this
    this.objectRef().name = 'Mutated (same ref)';
  }

  replaceObject(): void {
    // New reference — OnPush child will detect this
    this.objectRef.set({ name: `Replaced #${Date.now() % 10000}` });
  }

  triggerCd(): void {
    this.cdRef.detectChanges();
  }
}
