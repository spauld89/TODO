import { Route } from '@angular/router';
import { MainComponent } from './content/main/main.component';
import { TaskComponent } from './content/task/task.component';

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
    path: 'task',
    component: TaskComponent
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];
