import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Product } from '../../../shared/models/product.model';
import { ProductState } from './product.state';
import * as ProductActions from './product.actions';

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (p) => p.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const initialState: ProductState = productAdapter.getInitialState({
  selectedId: null,
  loading: false,
  error: null,
});

export const productReducer = createReducer(
  initialState,

  // Load
  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductActions.loadProductsSuccess, (state, { products }) =>
    productAdapter.setAll(products, { ...state, loading: false })
  ),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Create
  on(ProductActions.createProduct, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductActions.createProductSuccess, (state, { product }) =>
    productAdapter.addOne(product, { ...state, loading: false })
  ),
  on(ProductActions.createProductFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Update
  on(ProductActions.updateProduct, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductActions.updateProductSuccess, (state, { product }) =>
    productAdapter.updateOne(
      { id: product.id, changes: product },
      { ...state, loading: false }
    )
  ),

  // Delete
  on(ProductActions.deleteProduct, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductActions.deleteProductSuccess, (state, { id }) =>
    productAdapter.removeOne(id, { ...state, loading: false })
  ),

  // Select
  on(ProductActions.selectProduct, (state, { id }) => ({
    ...state,
    selectedId: id,
  }))
);

export const { selectAll, selectEntities, selectIds, selectTotal } =
  productAdapter.getSelectors();
