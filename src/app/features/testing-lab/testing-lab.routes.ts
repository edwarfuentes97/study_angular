import { Routes } from '@angular/router';

export const TESTING_LAB_ROUTES: Routes = [{
  path: '',
  loadComponent: () => import('./testing-layout').then(m => m.TestingLayoutComponent),
  children: [
    { path: '', loadComponent: () => import('./testing-learn').then(m => m.TestingLearnComponent) },
    { path: 'examples', loadComponent: () => import('./testing-demo').then(m => m.TestingDemoComponent) },
    { path: 'lab', loadComponent: () => import('./testing-exercises').then(m => m.TestingExercisesComponent) },
  ]
}];
