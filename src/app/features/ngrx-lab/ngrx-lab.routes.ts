import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { productReducer } from './store/product.reducer';
import { ProductEffects } from './store/product.effects';

export const NGRX_LAB_ROUTES: Routes = [{
  path: '',
  providers: [
    provideState('products', productReducer),
    provideEffects(ProductEffects),
  ],
  loadComponent: () => import('./ngrx-layout').then(m => m.NgrxLayoutComponent),
  children: [
    { path: '', loadComponent: () => import('./ngrx-learn').then(m => m.NgrxLearnComponent) },
    { path: 'examples', loadComponent: () => import('./components/product-list').then(m => m.ProductListComponent) },
    { path: 'lab', loadComponent: () => import('./ngrx-exercises').then(m => m.NgrxExercisesComponent) },
  ]
}];
