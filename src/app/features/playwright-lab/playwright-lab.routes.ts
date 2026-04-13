import { Routes } from '@angular/router';

export const PLAYWRIGHT_LAB_ROUTES: Routes = [{
  path: '',
  loadComponent: () => import('./playwright-layout').then(m => m.PlaywrightLayoutComponent),
  children: [
    { path: '', loadComponent: () => import('./playwright-learn').then(m => m.PlaywrightLearnComponent) },
    { path: 'examples', loadComponent: () => import('./playwright-demo').then(m => m.PlaywrightDemoComponent) },
    { path: 'lab', loadComponent: () => import('./playwright-exercises').then(m => m.PlaywrightExercisesComponent) },
  ]
}];
