import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tiles: grid[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}

// TODO make components: header with task type filter and search, main task list, task addition form, task page
// Task list component:
// task options: creation date, due date, type;
// task types: urgent, normal, optional, done;
// task styles: urgent - red, normal - white, optional - green, done - grey
// task methods: add, delete, mark as done

