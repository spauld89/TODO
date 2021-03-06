import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  private _data: task[];

  public getData(): task[] {
    const storage: string = localStorage.getItem('tasks');
    if (storage === null) {
      return this._data = [];
    }
    try {
      return this._data = JSON.parse(storage);
    } catch (error) {
      console.error(error);
      window.alert('Error: cannot parse the data from the storage!');
      return this._data = [];
    }
  }

  public getTaskById(id: number): task {
    const tasks: task[] = this.getData();
    let foundTask: task;
    tasks.forEach((task: task, i: number) => {
      if (tasks[i].id === id) {
        foundTask = task;
      }
    });
    return foundTask;
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
    try {
      localStorage.setItem('tasks', JSON.stringify(this._data));
    } catch (error) {
      console.log(error);
      window.alert('Error: cannot write the task to the storage!');
    }
  }
}
