import { Routes } from '@angular/router';

export const MFE_LAB_ROUTES: Routes = [{
  path: '',
  loadComponent: () => import('./mfe-layout').then(m => m.MfeLayoutComponent),
  children: [
    { path: '', loadComponent: () => import('./mfe-learn').then(m => m.MfeLearnComponent) },
    { path: 'examples', loadComponent: () => import('./mfe-examples').then(m => m.MfeExamplesComponent) },
    { path: 'lab', loadComponent: () => import('./mfe-exercises').then(m => m.MfeExercisesComponent) },
  ]
}];
