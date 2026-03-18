import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/dashboard/dashboard').then(m => m.DashboardComponent) },
  { path: 'guide', loadComponent: () => import('./features/study-guide/study-guide').then(m => m.StudyGuideComponent) },
  {
    path: 'lab/ngrx',
    canActivate: [authGuard],
    loadChildren: () => import('./features/ngrx-lab/ngrx-lab.routes').then(m => m.NGRX_LAB_ROUTES)
  },
  {
    path: 'lab/rxjs',
    loadChildren: () => import('./features/rxjs-lab/rxjs-lab.routes').then(m => m.RXJS_LAB_ROUTES)
  },
  {
    path: 'lab/fundamentals',
    loadChildren: () => import('./features/fundamentals-lab/fundamentals-lab.routes').then(m => m.FUNDAMENTALS_LAB_ROUTES)
  },
  {
    path: 'lab/angular',
    loadChildren: () => import('./features/angular-lab/angular-lab.routes').then(m => m.ANGULAR_LAB_ROUTES)
  },
  {
    path: 'lab/typescript',
    loadChildren: () => import('./features/typescript-lab/ts-lab.routes').then(m => m.TS_LAB_ROUTES)
  },
  {
    path: 'lab/architecture',
    loadChildren: () => import('./features/architecture-lab/arch-lab.routes').then(m => m.ARCH_LAB_ROUTES)
  },
  {
    path: 'lab/performance',
    loadChildren: () => import('./features/performance-lab/perf-lab.routes').then(m => m.PERF_LAB_ROUTES)
  },
  {
    path: 'lab/testing',
    loadChildren: () => import('./features/testing-lab/testing-lab.routes').then(m => m.TESTING_LAB_ROUTES)
  },
  { path: '**', redirectTo: '' }
];
