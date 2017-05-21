import { Component, } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  public taskTypes: string[] = [
    'normal',
    'urgent',
    'optional',
    'done'
  ];
  public taskType: string;
}
