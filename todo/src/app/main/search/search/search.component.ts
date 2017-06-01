import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter();

  public constructor() { }
  public search(value: string): void {
    this.onSearch.emit(value);
  }
}
