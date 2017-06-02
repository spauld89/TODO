import { Component } from '@angular/core';

@Component({
  selector: 'todo-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public searchValue: string;
  public showForm: boolean;
  public newTask: task;
  public onSearch(value: string): void {
    this.searchValue = value;
  }
  public onShowForm(): void {
    this.showForm = true;
  }
  public onCloseForm(): void {
    this.showForm = false;
  }
  public onSaveTask(task: task): void {
    this.newTask = task;
  }
}
