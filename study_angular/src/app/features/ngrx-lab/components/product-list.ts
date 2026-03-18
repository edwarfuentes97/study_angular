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
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
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
