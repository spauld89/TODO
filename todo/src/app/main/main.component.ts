import { Component } from '@angular/core';

@Component({
  selector: 'todo-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public searchValue: string;
  public onSearch(value: string): void {
    this.searchValue = value;
  }
}
