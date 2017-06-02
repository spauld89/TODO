import { Component, EventEmitter, Input, Output } from '@angular/core';
import { taskTypes } from '../../common/data/task-types/index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

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
  @Output()
  public onSaveTask: EventEmitter<task> = new EventEmitter();

  public taskTypes: string[] = taskTypes;
  public currentDate: Date = new Date();
  public form: FormGroup;

  public constructor(
    public fb: FormBuilder,
    private datePipe: DatePipe) {
    this.form = this.fb.group({
      name: ['', Validators.required ],
      type: taskTypes[0],
      creationDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
      dueDate: ['', Validators.required ],
      description: ['', Validators.required ],
      show: false
    });
  }

  public submit(): void {
    if (this.form.status === 'INVALID') {
      return;
    }
    this.form.value.dueDate = this.datePipe.transform(this.form.value.dueDate, 'yyyy-MM-dd');
    this.save(this.form.value);
  }
  public save(task: task): void {
    this.onSaveTask.emit(task);
    this.close();
  }
  public close(): void {
    this.onCloseForm.emit();
  }
}
