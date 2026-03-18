import { Routes } from '@angular/router';

export const ANGULAR_LAB_ROUTES: Routes = [{
  path: '',
  loadComponent: () => import('./angular-layout').then(m => m.AngularLayoutComponent),
  children: [
    { path: '', loadComponent: () => import('./angular-learn').then(m => m.AngularLearnComponent) },
    { path: 'examples', loadComponent: () => import('./change-detection/cd-demo').then(m => m.CdDemoComponent) },
    { path: 'examples/signals', loadComponent: () => import('./signals/signals-demo').then(m => m.SignalsDemoComponent) },
    { path: 'examples/forms', loadComponent: () => import('./forms/reactive-form-demo').then(m => m.ReactiveFormDemoComponent) },
    { path: 'examples/lazy', loadChildren: () => import('./lazy-feature/lazy-demo.routes').then(m => m.LAZY_ROUTES) },
    { path: 'lab', loadComponent: () => import('./angular-exercises').then(m => m.AngularExercisesComponent) },
  ]
}];
