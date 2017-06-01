import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  public taskTypes: string[] = [
    'normal',
    'urgent',
    'optional',
    'done'
  ];
  public taskType: string;
  public close(): void {
    this.onCloseForm.emit();
  }
}
