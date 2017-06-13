import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { taskTypes } from '../data/task-types/index';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from './storage.service';

@Injectable()
export class FormService {
  public constructor(
    private _datePipe: DatePipe,
    private _fb: FormBuilder,
    private _storageService: StorageService
  ) {}

  public generateForm(): FormGroup {
    return this._fb.group({
      name: ['', Validators.required ],
      type: taskTypes[0],
      creationDate: this._datePipe.transform(new Date(), 'yyyy-MM-dd'),
      dueDate: ['', [Validators.required, this._dateValidator] ],
      description: ['', Validators.required ],
      show: false
    });
  }

  public addTaskId(task: task): void {
    task.id = this._generateId();
  }

  private _generateId(): number {
    const taskList: task[] = this._storageService.getData();
    const id: number = Math.floor(Math.random() * 9999);
    taskList.forEach((task: task) => {
      if (task.id === id) {
        this._generateId();
        return;
      }
    });
    return id;
  }

  private _dateValidator(control: FormControl): { [key: string]: boolean } {
    const value: Date = control.value || '';
    const currentDate: Date = new Date();
    const startDate: Date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      0, 0, 0
    );
    const valid: boolean = value >= startDate;
    return (valid ? null : { minerror: true });
  }

}
