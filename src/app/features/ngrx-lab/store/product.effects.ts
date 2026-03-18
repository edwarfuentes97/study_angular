import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { MockApiService } from '../../../core/services/mock-api.service';
import * as ProductActions from './product.actions';

@Injectable()
export class ProductEffects {
  private readonly actions$ = inject(Actions);
  private readonly api = inject(MockApiService);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(() =>
        this.api.getProducts().pipe(
          map((products) => ProductActions.loadProductsSuccess({ products })),
          catchError((err) =>
            of(ProductActions.loadProductsFailure({ error: err.message ?? 'Failed to load products' }))
          )
        )
      )
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.createProduct),
      exhaustMap(({ product }) =>
        this.api.createProduct(product).pipe(
          map((created) => ProductActions.createProductSuccess({ product: created })),
          catchError((err) =>
            of(ProductActions.createProductFailure({ error: err.message ?? 'Failed to create product' }))
          )
        )
      )
    )
  );

  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.updateProduct),
      mergeMap(({ product }) =>
        this.api.updateProduct(product).pipe(
          map((updated) => ProductActions.updateProductSuccess({ product: updated }))
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      mergeMap(({ id }) =>
        this.api.deleteProduct(id).pipe(
          map((deletedId) => ProductActions.deleteProductSuccess({ id: deletedId }))
        )
      )
    )
  );
}
