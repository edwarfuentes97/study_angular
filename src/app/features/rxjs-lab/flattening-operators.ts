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
  templateUrl: './flattening-operators.html',
  styleUrl: './flattening-operators.css'
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
