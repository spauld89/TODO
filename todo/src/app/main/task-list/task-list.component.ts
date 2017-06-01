import { Component, Input, OnInit } from '@angular/core';
import { taskList } from '../../common/data/index';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'todo-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public taskList: task[] = taskList;
  public filter: string;
  private _searchSubject$$: Subject<string> = new Subject();

  @Input()
  private set searchValue(searchValue: string){
    this._searchSubject$$.next(searchValue);
  }
  public removeTask(index: number): void {
    this.taskList.splice(index, 1);
  }
  public ngOnInit(): void {
    this._searchSubject$$
      .debounceTime(300)
      .subscribe((searchValue: string) => {
        this.filter = searchValue;
      });
  }
}
