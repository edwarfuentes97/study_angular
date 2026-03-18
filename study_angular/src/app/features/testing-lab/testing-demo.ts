import { Component, inject, signal, OnInit } from '@angular/core';
import { MockApiService } from '../../core/services/mock-api.service';
import { Product } from '../../shared/models/product.model';

@Component({
  templateUrl: './testing-demo.html',
  styleUrl: './testing-demo.css'
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
