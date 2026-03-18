import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.state';
import { selectAll, selectEntities, selectIds, selectTotal } from './product.reducer';

export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(selectProductState, selectAll);
export const selectProductEntities = createSelector(selectProductState, selectEntities);
export const selectProductIds = createSelector(selectProductState, selectIds);
export const selectProductTotal = createSelector(selectProductState, selectTotal);

export const selectSelectedId = createSelector(
  selectProductState,
  (state) => state.selectedId
);
export const selectLoading = createSelector(
  selectProductState,
  (state) => state.loading
);
export const selectError = createSelector(
  selectProductState,
  (state) => state.error
);

export const selectSelectedProduct = createSelector(
  selectSelectedId,
  selectProductEntities,
  (id, entities) => (id ? entities[id] ?? null : null)
);

export const selectHighSustainability = createSelector(
  selectAllProducts,
  (products) => products.filter((p) => p.sustainabilityScore >= 80)
);
