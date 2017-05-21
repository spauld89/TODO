import { Component } from '@angular/core';
import { taskList } from '../common/data/index';

@Component({
  selector: 'todo-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {
  public task: task = taskList[1];
}
