import { Component, EventEmitter, Input, Output } from '@angular/core';
import { taskTypes } from '../../common/data/task-types/index';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  @Input()
  public showForm: boolean;
  @Output()
  public onCloseForm: EventEmitter<boolean> = new EventEmitter();
  public taskTypes: string[] = taskTypes;
  public taskType: string;
  public close(): void {
    this.onCloseForm.emit();
  }
}
