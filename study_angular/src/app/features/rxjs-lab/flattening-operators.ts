import { Component, signal, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subject, of, Subscription } from 'rxjs';
import { switchMap, mergeMap, concatMap, exhaustMap, delay, finalize } from 'rxjs/operators';

interface RequestLog {
  id: number;
  status: '🟢 started' | '✅ completed' | '❌ cancelled' | '⏳ queued';
  time: string;
}

interface OperatorColumn {
  name: string;
  description: string;
  logs: RequestLog[];
  click$: Subject<number>;
  sub: Subscription | null;
  requestId: number;
}

@Component({
  selector: 'app-flattening-operators',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="lab-header">
      <h2>🔀 Flattening Operators</h2>
      <p>Click rapidly to see how switchMap, mergeMap, concatMap, and exhaustMap differ</p>
      <nav class="lab-nav">
        <a routerLink="/lab/rxjs" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Observable Types</a>
        <a routerLink="/lab/rxjs/operators" routerLinkActive="active">Operators</a>
        <a routerLink="/lab/rxjs/search" routerLinkActive="active">Search</a>
        <a routerLink="/lab/rxjs/combining" routerLinkActive="active">Combining</a>
        <a routerLink="/lab/rxjs/memory" routerLinkActive="active">Memory Leaks</a>
      </nav>
    </div>

    <div class="controls">
      <button class="btn btn-primary" (click)="clickAll()">🖱️ Click (simulates request)</button>
      <button class="btn btn-danger" (click)="resetAll()">Reset All</button>
      <span class="hint">Click rapidly 3-5 times, then watch the columns</span>
    </div>

    <div class="columns">
      @for (col of columns(); track col.name) {
        <div class="column card">
          <h3>{{ col.name }}</h3>
          <p class="description">{{ col.description }}</p>
          <div class="output-log">
            @if (col.logs.length === 0) {
              <div class="log-entry" style="color: var(--text-muted)">No requests yet...</div>
            }
            @for (entry of col.logs; track $index) {
              <div class="log-entry">
                <span class="log-time">{{ entry.time }}</span>
                <span>{{ entry.status }} #{{ entry.id }}</span>
              </div>
            }
          </div>
        </div>
      }
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

    .controls {
      display: flex; gap: 0.5rem; align-items: center; margin: 1rem 0; flex-wrap: wrap;
    }
    .hint { color: var(--text-muted); font-size: 0.82rem; font-style: italic; }

    .columns {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 0.8rem;
    }
    .column h3 { color: var(--accent-purple); font-size: 0.95rem; margin-bottom: 0.3rem; }
    .column .description { color: var(--text-muted); font-size: 0.78rem; margin-bottom: 0.5rem; }
  `
})
export class FlatteningOperatorsComponent implements OnDestroy {
  columns = signal<OperatorColumn[]>([]);

  private allColumns: OperatorColumn[] = [];

  constructor() {
    this.initColumns();
  }

  private initColumns() {
    const defs: { name: string; description: string }[] = [
      { name: 'switchMap', description: 'Cancels previous request when a new one arrives' },
      { name: 'mergeMap', description: 'Runs all requests in parallel' },
      { name: 'concatMap', description: 'Queues requests, runs one at a time' },
      { name: 'exhaustMap', description: 'Ignores new requests while one is in-flight' },
    ];

    this.allColumns = defs.map(d => {
      const col: OperatorColumn = {
        name: d.name,
        description: d.description,
        logs: [],
        click$: new Subject<number>(),
        sub: null,
        requestId: 0,
      };
      this.setupOperator(col);
      return col;
    });

    this.columns.set([...this.allColumns]);
  }

  private setupOperator(col: OperatorColumn) {
    const simulateRequest = (id: number) => {
      this.addLog(col, id, '🟢 started');
      return of(`Result ${id}`).pipe(
        delay(2000),
        finalize(() => {
          // If no completed log was added, it was cancelled
          const hasCompleted = col.logs.some(l => l.id === id && l.status === '✅ completed');
          if (!hasCompleted) {
            this.addLog(col, id, '❌ cancelled');
          }
        }),
      );
    };

    const operatorFn = (() => {
      switch (col.name) {
        case 'switchMap': return switchMap(simulateRequest);
        case 'mergeMap': return mergeMap(simulateRequest);
        case 'concatMap': return concatMap((id: number) => {
          this.addLog(col, id, '⏳ queued');
          return simulateRequest(id);
        });
        case 'exhaustMap': return exhaustMap(simulateRequest);
        default: return switchMap(simulateRequest);
      }
    })();

    col.sub = col.click$.pipe(operatorFn).subscribe(result => {
      const id = parseInt(String(result).replace('Result ', ''), 10);
      this.addLog(col, id, '✅ completed');
    });
  }

  clickAll() {
    for (const col of this.allColumns) {
      col.requestId++;
      col.click$.next(col.requestId);
    }
    this.columns.set([...this.allColumns]);
  }

  resetAll() {
    for (const col of this.allColumns) {
      col.sub?.unsubscribe();
      col.logs = [];
      col.click$ = new Subject<number>();
      col.requestId = 0;
      this.setupOperator(col);
    }
    this.columns.set([...this.allColumns]);
  }

  private addLog(col: OperatorColumn, id: number, status: RequestLog['status']) {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
      + '.' + String(now.getMilliseconds()).padStart(3, '0');
    col.logs = [...col.logs, { id, status, time }];
    this.columns.set([...this.allColumns]);
  }

  ngOnDestroy() {
    for (const col of this.allColumns) {
      col.sub?.unsubscribe();
      col.click$.complete();
    }
  }
}
