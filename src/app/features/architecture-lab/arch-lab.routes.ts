import { Routes } from '@angular/router';

export const ARCH_LAB_ROUTES: Routes = [{
  path: '',
  loadComponent: () => import('./arch-layout').then(m => m.ArchLayoutComponent),
  children: [
    { path: '', loadComponent: () => import('./arch-learn').then(m => m.ArchLearnComponent) },
    { path: 'examples', loadComponent: () => import('./architecture-lab').then(m => m.ArchitectureLabComponent) },
    { path: 'lab', loadComponent: () => import('./arch-exercises').then(m => m.ArchExercisesComponent) },
  ]
}];
