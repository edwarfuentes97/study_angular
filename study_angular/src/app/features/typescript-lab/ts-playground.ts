import { Component, signal, computed } from '@angular/core';
import { Product } from '../../shared/models/product.model';

type GenericExample = 'Product' | 'User' | 'Order';

interface User {
  id: string;
  name: string;
  email: string;
}

interface Order {
  id: string;
  productId: string;
  quantity: number;
  total: number;
}

type LoadingState = { status: 'loading' };
type SuccessState<T> = { status: 'success'; data: T };
type ErrorState = { status: 'error'; message: string };
type ApiResponse = LoadingState | SuccessState<Product[]> | ErrorState;

type UtilityDemo = 'Partial' | 'Pick' | 'Omit' | 'Record';

@Component({
  template: `
    <section class="lab">
      <header class="lab-header">
        <h2>🔷 TypeScript Playground</h2>
        <p>Advanced TypeScript concepts with interactive examples</p>
      </header>

      <!-- Generics Section -->
      <div class="lab-section">
        <h3>1. Generics — DataService&lt;T&gt;</h3>
        <div class="card">
          <p class="explanation">
            Generics let you write reusable code that works with any type while preserving type safety.
          </p>
          <pre><code>class DataService&lt;T&gt; {{ '{' }}
  private items: T[] = [];
  add(item: T): void {{ '{' }} this.items.push(item); {{ '}' }}
  getAll(): T[] {{ '{' }} return [...this.items]; {{ '}' }}
  findById(predicate: (item: T) =&gt; boolean): T | undefined {{ '{' }}
    return this.items.find(predicate);
  {{ '}' }}
{{ '}' }}</code></pre>

          <div class="controls">
            <span class="label">Select type parameter:</span>
            @for (type of genericTypes; track type) {
              <button
                class="btn"
                [class.btn-active]="selectedGeneric() === type"
                (click)="selectedGeneric.set(type)">
                {{ type }}
              </button>
            }
          </div>

          <div class="output-log">
            <div class="log-entry">
              <span class="log-time">Type:</span>
              DataService&lt;{{ selectedGeneric() }}&gt;
            </div>
            <div class="log-entry">
              <span class="log-time">Resolved:</span>
              <pre><code>{{ genericResolution() }}</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Type Guards Section -->
      <div class="lab-section">
        <h3>2. Type Guards & Discriminated Unions</h3>
        <div class="card">
          <pre><code>type LoadingState = {{ '{' }} status: 'loading' {{ '}' }};
type SuccessState&lt;T&gt; = {{ '{' }} status: 'success'; data: T {{ '}' }};
type ErrorState = {{ '{' }} status: 'error'; message: string {{ '}' }};

type ApiResponse = LoadingState | SuccessState&lt;Product[]&gt; | ErrorState;

// The discriminant "status" narrows the type automatically
function handle(response: ApiResponse) {{ '{' }}
  switch (response.status) {{ '{' }}
    case 'loading': // response is LoadingState
    case 'success': // response is SuccessState&lt;Product[]&gt; → response.data
    case 'error':   // response is ErrorState → response.message
  {{ '}' }}
{{ '}' }}</code></pre>

          <div class="controls">
            <span class="label">Switch state:</span>
            <button class="btn" [class.btn-active]="currentState() === 'loading'" (click)="currentState.set('loading')">Loading</button>
            <button class="btn" [class.btn-active]="currentState() === 'success'" (click)="currentState.set('success')">Success</button>
            <button class="btn" [class.btn-active]="currentState() === 'error'" (click)="currentState.set('error')">Error</button>
          </div>

          <div class="output-log">
            <div class="log-entry">
              <span class="log-time">Current type:</span>
              <span class="type-tag" [attr.data-state]="currentState()">{{ stateTypeInfo().typeName }}</span>
            </div>
            <div class="log-entry">
              <span class="log-time">Available properties:</span>
              {{ stateTypeInfo().properties }}
            </div>
            <div class="log-entry">
              <span class="log-time">Value:</span>
              <pre><code>{{ stateTypeInfo().value }}</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Utility Types Section -->
      <div class="lab-section">
        <h3>3. Utility Types</h3>
        <div class="card">
          <pre><code>interface Product {{ '{' }}
  id: string;
  name: string;
  category: string;
  price: number;
  sustainabilityScore: number;
  description?: string;
{{ '}' }}</code></pre>

          <div class="controls">
            <span class="label">Apply utility type:</span>
            @for (ut of utilityTypes; track ut) {
              <button
                class="btn"
                [class.btn-active]="selectedUtility() === ut"
                (click)="selectedUtility.set(ut)">
                {{ ut }}
              </button>
            }
          </div>

          <div class="output-log">
            <div class="log-entry">
              <span class="log-time">Expression:</span>
              {{ utilityInfo().expression }}
            </div>
            <div class="log-entry">
              <span class="log-time">Result type:</span>
              <pre><code>{{ utilityInfo().result }}</code></pre>
            </div>
            <div class="log-entry">
              <span class="log-time">Use case:</span>
              {{ utilityInfo().useCase }}
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .lab { max-width: 860px; margin: 0 auto; }

    .explanation {
      color: var(--text-muted);
      font-size: 0.88rem;
      margin-bottom: 0.6rem;
    }

    .controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin: 0.8rem 0;
    }
    .controls .label {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-right: 0.25rem;
    }

    .btn-active {
      border-color: var(--accent-blue) !important;
      background: rgba(88, 166, 255, 0.15) !important;
      color: var(--accent-blue) !important;
    }

    .type-tag {
      font-weight: 600;
      padding: 0.15em 0.5em;
      border-radius: 4px;
      font-size: 0.85rem;
    }
    .type-tag[data-state="loading"] { color: var(--accent-orange); }
    .type-tag[data-state="success"] { color: var(--accent-green); }
    .type-tag[data-state="error"]   { color: var(--accent-red); }

    pre { margin: 0.4rem 0; }
  `
})
export class TsPlaygroundComponent {
  protected readonly genericTypes: GenericExample[] = ['Product', 'User', 'Order'];
  protected readonly utilityTypes: UtilityDemo[] = ['Partial', 'Pick', 'Omit', 'Record'];

  protected readonly selectedGeneric = signal<GenericExample>('Product');
  protected readonly currentState = signal<'loading' | 'success' | 'error'>('loading');
  protected readonly selectedUtility = signal<UtilityDemo>('Partial');

  protected readonly genericResolution = computed(() => {
    const map: Record<GenericExample, string> = {
      Product: `{
  add(item: Product): void;
  getAll(): Product[];            // → { id, name, category, price, sustainabilityScore, description? }
  findById(pred: (item: Product) => boolean): Product | undefined;
}`,
      User: `{
  add(item: User): void;
  getAll(): User[];               // → { id, name, email }
  findById(pred: (item: User) => boolean): User | undefined;
}`,
      Order: `{
  add(item: Order): void;
  getAll(): Order[];              // → { id, productId, quantity, total }
  findById(pred: (item: Order) => boolean): Order | undefined;
}`,
    };
    return map[this.selectedGeneric()];
  });

  protected readonly stateTypeInfo = computed(() => {
    const state = this.currentState();
    switch (state) {
      case 'loading':
        return {
          typeName: 'LoadingState',
          properties: 'status',
          value: JSON.stringify({ status: 'loading' } satisfies LoadingState, null, 2),
        };
      case 'success':
        return {
          typeName: 'SuccessState<Product[]>',
          properties: 'status, data',
          value: JSON.stringify(
            {
              status: 'success',
              data: [{ id: '1', name: 'Organic Cotton T-Shirt', category: 'Textiles', price: 29.99, sustainabilityScore: 85 }],
            } as SuccessState<Product[]>,
            null, 2,
          ),
        };
      case 'error':
        return {
          typeName: 'ErrorState',
          properties: 'status, message',
          value: JSON.stringify({ status: 'error', message: 'Network timeout' } satisfies ErrorState, null, 2),
        };
    }
  });

  protected readonly utilityInfo = computed(() => {
    const map: Record<UtilityDemo, { expression: string; result: string; useCase: string }> = {
      Partial: {
        expression: 'Partial<Product>',
        result: `{
  id?: string;
  name?: string;
  category?: string;
  price?: number;
  sustainabilityScore?: number;
  description?: string;
}`,
        useCase: 'Useful for update/patch operations where only some fields are provided.',
      },
      Pick: {
        expression: "Pick<Product, 'name' | 'price'>",
        result: `{
  name: string;
  price: number;
}`,
        useCase: 'Extract a subset of properties — great for DTOs or form models.',
      },
      Omit: {
        expression: "Omit<Product, 'id'>",
        result: `{
  name: string;
  category: string;
  price: number;
  sustainabilityScore: number;
  description?: string;
}`,
        useCase: 'Remove properties — perfect for creation payloads where the server assigns the id.',
      },
      Record: {
        expression: 'Record<string, Product>',
        result: `{
  [key: string]: Product;
}
// Example:
// { "1": { id: "1", name: "Organic Cotton T-Shirt", ... } }`,
        useCase: 'Dictionary/map pattern — NgRx EntityState uses this internally.',
      },
    };
    return map[this.selectedUtility()];
  });
}
