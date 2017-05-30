import { Component } from '@angular/core';
import { taskList } from '../../../common/data/index';

@Component({
  selector: 'todo-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  public task: task = taskList[1];
}
