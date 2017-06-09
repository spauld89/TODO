import { Route } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TaskComponent } from './main/task-list/task/task.component';

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
