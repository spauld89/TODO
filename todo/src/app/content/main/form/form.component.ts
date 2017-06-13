import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { taskTypes } from '../../../common/data/task-types/index';
import { FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { StorageService } from '../../../common/services/storage.service';
import { FormService } from '../../../common/services/form.service';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
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
    private _storageService: StorageService,
    private _formService: FormService,
    private _datePipe: DatePipe) {}

  public submit(): void {
    if (this.form.status === 'INVALID') {
      return;
    }
    this.form.value.dueDate = this._datePipe.transform(this.form.value.dueDate, 'yyyy-MM-dd');
    this.save(this.form.value);
  }

  public save(task: task): void {
    this.onSaveTask.emit(task);
    this._formService.addTaskId(task);
    this._storageService.setData(task, 'add');
    this.close();
  }

  public close(): void {
    this.onCloseForm.emit();
  }

  public ngOnInit(): void {
    this.form = this._formService.generateForm();
  }
}
