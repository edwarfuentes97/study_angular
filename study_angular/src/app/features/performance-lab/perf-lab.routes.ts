import { Routes } from '@angular/router';

export const PERF_LAB_ROUTES: Routes = [{
  path: '',
  loadComponent: () => import('./perf-layout').then(m => m.PerfLayoutComponent),
  children: [
    { path: '', loadComponent: () => import('./perf-learn').then(m => m.PerfLearnComponent) },
    { path: 'examples', loadComponent: () => import('./perf-demo').then(m => m.PerfDemoComponent) },
    { path: 'lab', loadComponent: () => import('./perf-exercises').then(m => m.PerfExercisesComponent) },
  ]
}];
