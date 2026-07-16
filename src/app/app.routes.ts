import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadComponent: () => import('./test2/test2').then((m) => m.Test2) },
  { path: 'form', loadComponent: () => import('./test/test').then((m) => m.Test) },
  { path: '**', redirectTo: 'home' },
];
