import { EventEmitter, Injectable, Output } from '@angular/core';
import { taskList } from '../data/demo-tasks/index';

@Injectable()
export class StorageService {
  private _data: task[];
  private _isFirstSet: boolean = true;

  public getData(): task[] {
    const storage: string = localStorage.getItem('tasks');
    if (storage === null) {
      return this._data = taskList;
    }
    return this._data = JSON.parse(storage);
  }

  public setData(task: task): void {
    if (this._isFirstSet === true) {
      this._data = [task];
      this._isFirstSet = false;
    } else {
      this._data.push(task);
    }
    localStorage.setItem('tasks', JSON.stringify(this._data));
  }

}
// TODO: emit set event either here or in components and make task-list.component get tasks on it;
