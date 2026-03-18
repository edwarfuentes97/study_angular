import { Routes } from '@angular/router';

export const RXJS_LAB_ROUTES: Routes = [{
  path: '',
  loadComponent: () => import('./rxjs-layout').then(m => m.RxjsLayoutComponent),
  children: [
    { path: '', loadComponent: () => import('./rxjs-learn').then(m => m.RxjsLearnComponent) },
    { path: 'examples', loadComponent: () => import('./observable-types').then(m => m.ObservableTypesComponent) },
    { path: 'examples/operators', loadComponent: () => import('./flattening-operators').then(m => m.FlatteningOperatorsComponent) },
    { path: 'examples/search', loadComponent: () => import('./search-typeahead').then(m => m.SearchTypeaheadComponent) },
    { path: 'examples/combining', loadComponent: () => import('./combining-operators').then(m => m.CombiningOperatorsComponent) },
    { path: 'examples/memory', loadComponent: () => import('./memory-leaks').then(m => m.MemoryLeaksComponent) },
    { path: 'lab', loadComponent: () => import('./rxjs-exercises').then(m => m.RxjsExercisesComponent) },
  ]
}];
