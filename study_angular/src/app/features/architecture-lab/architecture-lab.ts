import {
  Component,
  Input,
  Output,
  EventEmitter,
  signal,
  computed,
  ChangeDetectionStrategy,
  Injectable,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

// ── Shared item model ──────────────────────────────────────────
interface Item {
  id: number;
  name: string;
  description: string;
}

// ── Shared Service for communication pattern demo ──────────────
@Injectable()
class ItemBusService {
  readonly selected = signal<Item | null>(null);
  select(item: Item) { this.selected.set(item); }
  clear() { this.selected.set(null); }
}

// ═══════════════════════════════════════════════════════════════
// DUMB (Presentational) Components
// ═══════════════════════════════════════════════════════════════

@Component({
  selector: 'app-item-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="item-list">
      <h4>📋 Item List <span class="tag tag-blue">Presentational</span></h4>
      @for (item of items; track item.id) {
        <div
          class="list-row"
          [class.selected]="item.id === selectedId"
          (click)="select.emit(item)">
          <span class="item-name">{{ item.name }}</span>
          <span class="item-desc">{{ item.description }}</span>
        </div>
      } @empty {
        <p class="empty">No items yet.</p>
      }
    </div>
  `,
  styles: `
    .item-list h4 { margin-bottom: 0.5rem; font-size: 0.95rem; }
    .list-row {
      display: flex; justify-content: space-between; align-items: center;
      padding: 0.45rem 0.6rem; border-radius: 4px; cursor: pointer;
      font-size: 0.85rem; transition: background 0.15s;
    }
    .list-row:hover { background: rgba(88,166,255,0.08); }
    .list-row.selected { background: rgba(88,166,255,0.15); border-left: 3px solid var(--accent-blue); }
    .item-name { font-weight: 600; }
    .item-desc { color: var(--text-muted); font-size: 0.8rem; }
    .empty { color: var(--text-muted); font-size: 0.85rem; padding: 0.5rem; }
  `,
})
export class ItemListComponent {
  @Input() items: Item[] = [];
  @Input() selectedId: number | null = null;
  @Output() select = new EventEmitter<Item>();
}

@Component({
  selector: 'app-item-detail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="item-detail">
      <h4>🔍 Detail <span class="tag tag-blue">Presentational</span></h4>
      @if (item) {
        <p><strong>ID:</strong> {{ item.id }}</p>
        <p><strong>Name:</strong> {{ item.name }}</p>
        <p><strong>Description:</strong> {{ item.description }}</p>
        <button class="btn btn-danger" (click)="delete.emit(item!.id)">🗑 Delete</button>
      } @else {
        <p class="empty">Select an item to view details.</p>
      }
    </div>
  `,
  styles: `
    .item-detail h4 { margin-bottom: 0.5rem; font-size: 0.95rem; }
    .item-detail p { font-size: 0.85rem; margin-bottom: 0.3rem; }
    .empty { color: var(--text-muted); }
  `,
})
export class ItemDetailComponent {
  @Input() item: Item | null = null;
  @Output() delete = new EventEmitter<number>();
}

@Component({
  selector: 'app-add-item-form',
  standalone: true,
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="add-form">
      <h4>➕ Add Item <span class="tag tag-blue">Presentational</span></h4>
      <div class="form-row">
        <input class="input" placeholder="Name" [(ngModel)]="name" />
        <input class="input" placeholder="Description" [(ngModel)]="description" />
        <button class="btn btn-primary" (click)="submit()" [disabled]="!name.trim()">Add</button>
      </div>
    </div>
  `,
  styles: `
    .add-form h4 { margin-bottom: 0.5rem; font-size: 0.95rem; }
    .form-row { display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; }
    .input {
      padding: 0.4rem 0.6rem; border: 1px solid var(--border); border-radius: 6px;
      background: var(--bg); color: var(--text); font-size: 0.85rem; flex: 1; min-width: 120px;
    }
    .input:focus { outline: none; border-color: var(--accent-blue); }
  `,
})
export class AddItemFormComponent {
  @Output() add = new EventEmitter<Omit<Item, 'id'>>();
  protected name = '';
  protected description = '';

  protected submit() {
    if (this.name.trim()) {
      this.add.emit({ name: this.name.trim(), description: this.description.trim() });
      this.name = '';
      this.description = '';
    }
  }
}

// ═══════════════════════════════════════════════════════════════
// SMART (Container) Component — The main lab
// ═══════════════════════════════════════════════════════════════

@Component({
  imports: [ItemListComponent, ItemDetailComponent, AddItemFormComponent],
  providers: [ItemBusService],
  template: `
    <section class="lab">
      <header class="lab-header">
        <h2>🏗 Architecture Lab</h2>
        <p>Smart/Dumb pattern, component communication & enterprise patterns</p>
      </header>

      <!-- ── Live Smart/Dumb Demo ─────────────────── -->
      <div class="lab-section">
        <h3>1. Smart / Dumb Component Pattern — Live Demo</h3>
        <div class="card">
          <p class="explanation">
            The <strong>Smart</strong> (container) component owns the state and logic.
            <strong>Dumb</strong> (presentational) components receive data via <code>&#64;Input</code>
            and emit events via <code>&#64;Output</code>. All three child components use
            <code>OnPush</code> change detection.
          </p>

          <div class="split">
            <div class="split-main">
              <app-add-item-form (add)="onAdd($event)" />
              <app-item-list
                [items]="items()"
                [selectedId]="selectedItem()?.id ?? null"
                (select)="onSelect($event)" />
            </div>
            <div class="split-side">
              <app-item-detail
                [item]="selectedItem()"
                (delete)="onDelete($event)" />
            </div>
          </div>
        </div>
      </div>

      <!-- ── Communication Patterns ──────────────── -->
      <div class="lab-section">
        <h3>2. Component Communication Patterns</h3>

        <div class="pattern-grid">
          <!-- Pattern 1: Input/Output -->
          <div class="card">
            <h4><span class="pattern-num">①</span> &#64;Input / &#64;Output</h4>
            <pre><code>// Parent passes data down
&lt;app-item-list [items]="items()" (select)="onSelect($event)" /&gt;

// Child emits events up
&#64;Input() items: Item[] = [];
&#64;Output() select = new EventEmitter&lt;Item&gt;();</code></pre>
            <p class="pattern-note">✅ Best for direct parent↔child. Used in the demo above.</p>
          </div>

          <!-- Pattern 2: Shared Service -->
          <div class="card">
            <h4><span class="pattern-num">②</span> Shared Service</h4>
            <pre><code>&#64;Injectable()
class ItemBusService {{ '{' }}
  readonly selected = signal&lt;Item | null&gt;(null);
  select(item: Item) {{ '{' }} this.selected.set(item); {{ '}' }}
{{ '}' }}

// Any component can inject and read/write:
bus = inject(ItemBusService);
bus.select(item);          // writer
bus.selected();            // reader</code></pre>
            <div class="mini-demo">
              <button class="btn" (click)="busSelect()">Select "{{ items()[0]?.name || 'Item' }}" via bus</button>
              <span class="mini-result">Bus value: {{ busValue() }}</span>
            </div>
            <p class="pattern-note">✅ Best for sibling or deeply nested components.</p>
          </div>

          <!-- Pattern 3: Signals -->
          <div class="card">
            <h4><span class="pattern-num">③</span> Signals (Angular 17+)</h4>
            <pre><code>// Shared signal-based state
readonly count = signal(0);
readonly double = computed(() =&gt; count() * 2);

// In template — auto-tracked, fine-grained updates
&lt;span&gt;{{ '{{' }} count() {{ '}}' }}&lt;/span&gt;
&lt;span&gt;{{ '{{' }} double() {{ '}}' }}&lt;/span&gt;</code></pre>
            <div class="mini-demo">
              <button class="btn" (click)="incrementSignal()">Count: {{ signalCount() }}</button>
              <span class="mini-result">Double: {{ signalDouble() }}</span>
            </div>
            <p class="pattern-note">✅ Lightweight reactive state without RxJS overhead.</p>
          </div>

          <!-- Pattern 4: NgRx Store -->
          <div class="card">
            <h4><span class="pattern-num">④</span> NgRx Store</h4>
            <pre><code>// actions
export const loadProducts = createAction('[Products] Load');

// reducer
on(loadProducts, (state) =&gt; ({{ '{' }} ...state, loading: true {{ '}' }}))

// selector
export const selectAll = createSelector(selectState, s =&gt; s.products);

// effect
loadProducts$ = createEffect(() =&gt;
  this.actions$.pipe(
    ofType(loadProducts),
    switchMap(() =&gt; this.api.getProducts()),
    map(products =&gt; loadProductsSuccess({{ '{' }} products {{ '}' }}))
  )
);</code></pre>
            <p class="pattern-note">✅ Best for complex enterprise apps. See the <strong>NgRx Lab</strong> for a full demo.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .lab { max-width: 920px; margin: 0 auto; }

    .explanation {
      color: var(--text-muted);
      font-size: 0.88rem;
      margin-bottom: 0.75rem;
    }

    .split {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 1rem;
    }
    @media (max-width: 640px) {
      .split { grid-template-columns: 1fr; }
    }
    .split-main, .split-side { display: flex; flex-direction: column; gap: 0.75rem; }

    .pattern-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    @media (max-width: 700px) {
      .pattern-grid { grid-template-columns: 1fr; }
    }

    .pattern-num {
      color: var(--accent-blue);
      font-weight: 700;
      margin-right: 0.3rem;
    }

    .card h4 {
      font-size: 0.95rem;
      margin-bottom: 0.5rem;
    }

    .pattern-note {
      font-size: 0.8rem;
      color: var(--accent-green);
      margin-top: 0.5rem;
    }

    .mini-demo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0.5rem 0;
      flex-wrap: wrap;
    }
    .mini-result {
      font-size: 0.85rem;
      color: var(--accent-purple);
      font-weight: 600;
    }

    pre { margin: 0.4rem 0; }
  `
})
export class ArchitectureLabComponent {
  private readonly bus = signal<ItemBusService>(new ItemBusService()).asReadonly();

  // ── Smart component state ────────────────────────────────────
  private nextId = 4;
  protected readonly items = signal<Item[]>([
    { id: 1, name: 'AuthModule', description: 'Handles login & JWT' },
    { id: 2, name: 'DashboardWidget', description: 'KPI summary card' },
    { id: 3, name: 'ProductCard', description: 'Presentational component' },
  ]);
  protected readonly selectedItem = signal<Item | null>(null);

  // ── Signal demo ──────────────────────────────────────────────
  protected readonly signalCount = signal(0);
  protected readonly signalDouble = computed(() => this.signalCount() * 2);

  protected incrementSignal() {
    this.signalCount.update(v => v + 1);
  }

  // ── Bus demo ─────────────────────────────────────────────────
  protected readonly busValue = computed(() => {
    const item = this.bus().selected();
    return item ? item.name : '(none)';
  });

  protected busSelect() {
    const first = this.items()[0];
    if (first) this.bus().select(first);
  }

  // ── Smart component handlers (passed down) ──────────────────
  protected onAdd(data: Omit<Item, 'id'>) {
    const newItem: Item = { ...data, id: this.nextId++ };
    this.items.update(list => [...list, newItem]);
  }

  protected onSelect(item: Item) {
    this.selectedItem.set(item);
  }

  protected onDelete(id: number) {
    this.items.update(list => list.filter(i => i.id !== id));
    if (this.selectedItem()?.id === id) {
      this.selectedItem.set(null);
    }
  }
}
