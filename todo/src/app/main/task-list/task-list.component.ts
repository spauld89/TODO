import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { taskList } from '../../common/data/demo-tasks/index';
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
  @Output()
  public onShowForm: EventEmitter<boolean> = new EventEmitter();

  private _searchSubject$$: Subject<string> = new Subject();
  @Input()
  private set searchValue(searchValue: string){
    this._searchSubject$$.next(searchValue);
  }
  public removeTask(index: number): void {
    this.taskList.splice(index, 1);
  }
  public showTask(index: number): void {
    for (let i: number = 0; i < this.taskList.length; i++) {
      this.taskList[i].show = false;
    }
    this.taskList[index].show = true;
  }
  public showForm(): void {
    this.onShowForm.emit();
  }
  public ngOnInit(): void {
    this._searchSubject$$
      .debounceTime(300)
      .subscribe((searchValue: string) => {
        this.filter = searchValue;
      });
  }
}
