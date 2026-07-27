import { Routes } from '@angular/router';

export const IA_LAB_ROUTES: Routes = [{
  path: '',
  loadComponent: () => import('./ai-lab-layout').then(m => m.AiLabLayoutComponent),
  children: [
    { path: '', loadComponent: () => import('./ai-lab-introduction').then(m => m.AiLabIntroductionComponent) },
    { path: 'concepts', loadComponent: () => import('./ai-concepts').then(m => m.AiConceptsComponent) },
    { path: 'examples', loadComponent: () => import('./prompting-examples').then(m => m.PromptingExamplesComponent) },
    { path: 'lab', loadComponent: () => import('./ai-lab-exercises').then(m => m.AiLabExercisesComponent) },
  ]
}];
