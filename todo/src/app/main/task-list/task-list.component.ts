import { Component } from '@angular/core';
import { taskList } from '../../common/data/index';

@Component({
  selector: 'todo-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  public taskList: task[] = taskList;
}
