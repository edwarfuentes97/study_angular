import { createAction, props } from '@ngrx/store';
import { Product } from '../../../shared/models/product.model';

// Load
export const loadProducts = createAction('[Products Page] Load Products');
export const loadProductsSuccess = createAction(
  '[Products API] Load Products Success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Products API] Load Products Failure',
  props<{ error: string }>()
);

// Create
export const createProduct = createAction(
  '[Products Page] Create Product',
  props<{ product: Omit<Product, 'id'> }>()
);
export const createProductSuccess = createAction(
  '[Products API] Create Product Success',
  props<{ product: Product }>()
);
export const createProductFailure = createAction(
  '[Products API] Create Product Failure',
  props<{ error: string }>()
);

// Update
export const updateProduct = createAction(
  '[Products Page] Update Product',
  props<{ product: Product }>()
);
export const updateProductSuccess = createAction(
  '[Products API] Update Product Success',
  props<{ product: Product }>()
);

// Delete
export const deleteProduct = createAction(
  '[Products Page] Delete Product',
  props<{ id: string }>()
);
export const deleteProductSuccess = createAction(
  '[Products API] Delete Product Success',
  props<{ id: string }>()
);

// Select
export const selectProduct = createAction(
  '[Products Page] Select Product',
  props<{ id: string | null }>()
);
