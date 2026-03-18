import { Routes } from '@angular/router';

export const FUNDAMENTALS_LAB_ROUTES: Routes = [{
  path: '',
  loadComponent: () => import('./fundamentals-layout').then(m => m.FundamentalsLayoutComponent),
  children: [
    { path: '', loadComponent: () => import('./fundamentals-learn').then(m => m.FundamentalsLearnComponent) },
    { path: 'examples', loadComponent: () => import('./fundamentals-examples').then(m => m.FundamentalsExamplesComponent) },
    { path: 'lab', loadComponent: () => import('./fundamentals-exercises').then(m => m.FundamentalsExercisesComponent) },
  ]
}];
