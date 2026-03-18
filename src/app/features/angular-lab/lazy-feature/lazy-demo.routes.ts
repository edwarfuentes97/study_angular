import { Routes } from '@angular/router';

export const LAZY_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./lazy-demo').then(m => m.LazyDemoComponent) },
  { path: 'child-a', loadComponent: () => import('./lazy-child-a').then(m => m.LazyChildAComponent) },
  { path: 'child-b', loadComponent: () => import('./lazy-child-b').then(m => m.LazyChildBComponent) },
];
