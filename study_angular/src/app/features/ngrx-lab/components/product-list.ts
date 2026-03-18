import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/models/product.model';
import * as ProductActions from '../store/product.actions';
import {
  selectAllProducts,
  selectLoading,
  selectError,
} from '../store/product.selectors';
import { ProductCardComponent } from './product-card';
import { ProductFormComponent } from './product-form';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [AsyncPipe, ProductCardComponent, ProductFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="lab-header">
      <h2>🏪 NgRx Lab — Products CRUD</h2>
      <p class="subtitle">State management with @ngrx/store + @ngrx/entity + @ngrx/effects</p>
    </div>

    @if (error$ | async; as error) {
      <div class="error-banner">⚠️ {{ error }}</div>
    }

    @if (showForm) {
      <app-product-form
        [product]="editingProduct"
        (save)="onSave($event)"
        (cancel)="onCancelForm()" />
    }

    <div class="toolbar">
      <button class="btn btn-primary" (click)="onAddProduct()">+ Add Product</button>
      <span class="product-count">
        @if (loading$ | async) {
          Loading…
        } @else {
          {{ (products$ | async)?.length ?? 0 }} products
        }
      </span>
    </div>

    @if (loading$ | async) {
      <div class="loading-bar"></div>
    }

    <div class="grid">
      @for (product of products$ | async; track product.id) {
        <app-product-card
          [product]="product"
          (edit)="onEdit($event)"
          (delete)="onDelete($event)" />
      } @empty {
        @if (!(loading$ | async)) {
          <p class="empty">No products yet. Click "Add Product" to get started.</p>
        }
      }
    </div>
  `,
  styles: `
    :host { display: block; padding: 1.5rem; max-width: 1200px; margin: 0 auto; }
    .lab-header { margin-bottom: 1.5rem; }
    .lab-header h2 { margin: 0 0 .25rem; color: var(--text); }
    .subtitle { color: var(--text-muted); margin: 0; font-size: .9rem; }
    .error-banner {
      background: rgba(248, 81, 73, .15); border: 1px solid var(--accent-red);
      color: var(--accent-red); padding: .75rem 1rem; border-radius: 8px; margin-bottom: 1rem;
    }
    .toolbar {
      display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;
    }
    .product-count { color: var(--text-muted); font-size: .85rem; }
    .btn {
      padding: .5rem 1rem; border-radius: 6px; border: 1px solid var(--border);
      background: var(--bg-card); color: var(--text); cursor: pointer; font-size: .85rem;
      transition: background .15s;
    }
    .btn:hover { background: var(--border); }
    .btn-primary { background: var(--accent-blue); border-color: var(--accent-blue); color: #fff; }
    .btn-primary:hover { opacity: .85; background: var(--accent-blue); }
    .loading-bar {
      height: 3px; background: var(--accent-blue); border-radius: 2px;
      animation: pulse 1.2s ease-in-out infinite; margin-bottom: 1rem;
    }
    @keyframes pulse { 0%, 100% { opacity: .4; } 50% { opacity: 1; } }
    .grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;
    }
    .empty { color: var(--text-muted); text-align: center; grid-column: 1 / -1; padding: 3rem 0; }
  `,
})
export class ProductListComponent implements OnInit {
  private readonly store = inject(Store);

  products$: Observable<Product[]> = this.store.select(selectAllProducts);
  loading$: Observable<boolean> = this.store.select(selectLoading);
  error$: Observable<string | null> = this.store.select(selectError);

  showForm = false;
  editingProduct: Product | undefined;

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProducts());
  }

  onAddProduct(): void {
    this.editingProduct = undefined;
    this.showForm = true;
  }

  onEdit(product: Product): void {
    this.editingProduct = product;
    this.showForm = true;
  }

  onDelete(id: string): void {
    this.store.dispatch(ProductActions.deleteProduct({ id }));
  }

  onSave(data: Omit<Product, 'id'> | Product): void {
    if ('id' in data) {
      this.store.dispatch(ProductActions.updateProduct({ product: data as Product }));
    } else {
      this.store.dispatch(ProductActions.createProduct({ product: data }));
    }
    this.showForm = false;
    this.editingProduct = undefined;
  }

  onCancelForm(): void {
    this.showForm = false;
    this.editingProduct = undefined;
  }
}
