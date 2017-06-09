import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class StorageService {
  private _data: task[];

  public getData(): task[] {
    const storage: string = localStorage.getItem('tasks');
    if (storage === null) {
      return this._data = [];
    }
    return this._data = JSON.parse(storage);
  }

  public getTaskById(id: number): task {
    const tasks: task[] = this.getData();
    tasks.forEach((task: task, i: number) => {
      if (tasks[i].id === id) {
        return task;
      }
    });
    return;
  }

  public setData(task: task, action: string): void {
    switch (action) {
      case 'add':
        this._data.push(task);
        break;
      case 'remove':
        this._data.forEach((taskInArr: task, i: number) => {
          if (task.id === taskInArr.id) {
            this._data.splice(i, 1);
          }
        });
        break;
      case 'update':
        this._data.forEach((taskInArr: task, i: number) => {
          if (task.id === taskInArr.id) {
            this._data[i] = task;
          }
        });
        break;
    }
    localStorage.setItem('tasks', JSON.stringify(this._data));
  }
}
