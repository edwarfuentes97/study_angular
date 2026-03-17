import { Component, inject, signal, OnInit } from '@angular/core';
import { MockApiService } from '../../core/services/mock-api.service';
import { Product } from '../../shared/models/product.model';

@Component({
  template: `
    <section class="lab">
      <header class="lab-header">
        <h2>🧪 Testing Lab</h2>
        <p>A testable component with counter logic and service dependency</p>
      </header>

      <!-- Counter Section -->
      <div class="lab-section">
        <h3>Counter</h3>
        <div class="card">
          <div class="counter-display">
            <span class="counter-value" data-testid="counter-value">{{ counter() }}</span>
          </div>
          <div class="counter-controls">
            <button class="btn" data-testid="decrement-btn" (click)="decrement()">− Decrement</button>
            <button class="btn btn-primary" data-testid="increment-btn" (click)="increment()">+ Increment</button>
            <button class="btn btn-danger" data-testid="reset-btn" (click)="reset()">↺ Reset</button>
          </div>
        </div>
      </div>

      <!-- Products Section (loaded from service) -->
      <div class="lab-section">
        <h3>Products from MockApiService</h3>
        <div class="card">
          <div class="controls">
            <button class="btn btn-primary" data-testid="load-btn" (click)="loadProducts()">
              Load Products
            </button>
          </div>

          @if (loading()) {
            <div class="loading-bar" data-testid="loading-indicator"></div>
          }

          @if (error()) {
            <div class="error-banner" data-testid="error-message">⚠️ {{ error() }}</div>
          }

          <div class="product-list" data-testid="product-list">
            @for (product of products(); track product.id) {
              <div class="product-row" data-testid="product-row">
                <span class="product-name">{{ product.name }}</span>
                <span class="product-category">{{ product.category }}</span>
                <span class="product-price">\${{ product.price.toFixed(2) }}</span>
                <span class="product-score" [attr.data-score]="product.sustainabilityScore">
                  🌱 {{ product.sustainabilityScore }}
                </span>
              </div>
            } @empty {
              @if (!loading()) {
                <p class="empty" data-testid="empty-message">No products loaded. Click "Load Products".</p>
              }
            }
          </div>
        </div>
      </div>

      <!-- Test hints -->
      <div class="lab-section">
        <h3>Testing Hints</h3>
        <div class="card">
          <div class="output-log">
            <div class="log-entry"><span class="log-time">Tip 1:</span> Use <code>data-testid</code> attributes for reliable selectors</div>
            <div class="log-entry"><span class="log-time">Tip 2:</span> Mock <code>MockApiService</code> with <code>jasmine.createSpyObj</code></div>
            <div class="log-entry"><span class="log-time">Tip 3:</span> Use <code>fakeAsync</code> + <code>tick</code> for async operations</div>
            <div class="log-entry"><span class="log-time">Tip 4:</span> Always call <code>fixture.detectChanges()</code> after state changes</div>
            <div class="log-entry"><span class="log-time">Tip 5:</span> Test behavior, not implementation details</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .lab { max-width: 800px; margin: 0 auto; }

    .counter-display {
      text-align: center;
      padding: 1rem;
    }
    .counter-value {
      font-size: 3rem;
      font-weight: 700;
      color: var(--accent-blue);
      font-family: 'JetBrains Mono', monospace;
    }
    .counter-controls {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
    }

    .controls { margin-bottom: 0.75rem; }

    .loading-bar {
      height: 3px;
      background: var(--accent-blue);
      border-radius: 2px;
      animation: pulse 1.2s ease-in-out infinite;
      margin-bottom: 0.75rem;
    }
    @keyframes pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }

    .error-banner {
      background: rgba(248, 81, 73, 0.15);
      border: 1px solid var(--accent-red);
      color: var(--accent-red);
      padding: 0.5rem 0.75rem;
      border-radius: 6px;
      margin-bottom: 0.75rem;
      font-size: 0.85rem;
    }

    .product-list { display: flex; flex-direction: column; gap: 0.25rem; }
    .product-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.45rem 0.6rem;
      border-radius: 4px;
      font-size: 0.85rem;
      background: var(--bg);
      border: 1px solid var(--border);
    }
    .product-name { flex: 1; font-weight: 600; }
    .product-category { color: var(--text-muted); min-width: 5rem; }
    .product-price { color: var(--accent-orange); min-width: 4rem; text-align: right; }
    .product-score { color: var(--accent-green); min-width: 3rem; text-align: right; }

    .empty { color: var(--text-muted); font-size: 0.85rem; padding: 1rem; text-align: center; }

    pre { margin: 0.4rem 0; }
  `
})
export class TestingDemoComponent {
  private readonly api = inject(MockApiService);

  readonly counter = signal(0);
  readonly products = signal<Product[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  increment(): void {
    this.counter.update(n => n + 1);
  }

  decrement(): void {
    this.counter.update(n => n - 1);
  }

  reset(): void {
    this.counter.set(0);
  }

  loadProducts(): void {
    this.loading.set(true);
    this.error.set(null);
    this.api.getProducts().subscribe({
      next: (products: Product[]) => {
        this.products.set(products);
        this.loading.set(false);
      },
      error: (err: Error) => {
        this.error.set(err.message ?? 'Failed to load products');
        this.loading.set(false);
      },
    });
  }
}
