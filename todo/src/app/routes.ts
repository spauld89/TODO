import { Route } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InfoComponent } from './info/info.component';

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
    path: 'info',
    component: InfoComponent
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];
