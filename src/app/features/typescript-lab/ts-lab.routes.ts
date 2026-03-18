import { Routes } from '@angular/router';

export const TS_LAB_ROUTES: Routes = [{
  path: '',
  loadComponent: () => import('./ts-layout').then(m => m.TsLayoutComponent),
  children: [
    { path: '', loadComponent: () => import('./ts-learn').then(m => m.TsLearnComponent) },
    { path: 'examples', loadComponent: () => import('./ts-playground').then(m => m.TsPlaygroundComponent) },
    { path: 'lab', loadComponent: () => import('./ts-exercises').then(m => m.TsExercisesComponent) },
  ]
}];
