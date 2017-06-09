import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import { StorageService } from '../../common/services/storage.service';

@Component({
  selector: 'todo-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public taskList: task[];
  public filter: string;
  @Output()
  public onShowForm: EventEmitter<boolean> = new EventEmitter();

  private _searchSubject$$: Subject<string> = new Subject();
  private _taskList$$: Subject<task> = new Subject();
  @Input()
  private set searchValue(searchValue: string){
    this._searchSubject$$.next(searchValue);
  }
  @Input()
  private set newTask(newTask: task){
    this._taskList$$.next(newTask);
  }

  public constructor (private _storageService: StorageService) {}

  public removeTask(index: number, task: task): void {
    this.taskList.splice(index, 1);
    this._storageService.setData(task, 'remove');
  }
  public showTask(index: number): void {
    this.taskList.map((task: task): void => {
      task.show = false;
    });
    this.taskList[index].show = true;
  }
  public updateTask(task: task): void {
    this._storageService.setData(task, 'update');
  }
  public showForm(): void {
    this.onShowForm.emit();
  }
  public ngOnInit(): void {
    this.taskList = this._storageService.getData();
    this._searchSubject$$
      .debounceTime(300)
      .subscribe((searchValue: string) => {
        this.filter = searchValue;
      });
    this._taskList$$
      .subscribe((newTask: task) => {
        this.taskList.unshift(newTask);
      });
  }
}
