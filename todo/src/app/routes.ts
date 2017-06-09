import { Route } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];
