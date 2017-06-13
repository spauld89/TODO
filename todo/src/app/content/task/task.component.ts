import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { StorageService } from '../../common/services/storage.service';

@Component({
  selector: 'todo-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()
  public task: task;
  public id: number;

  public constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _storageService: StorageService
  ) {}

  public ngOnInit(): void {
    let task: task;
    this._route.queryParams.subscribe((params: Params) => {
      this.id = Number(params.id);
      task = this._storageService.getTaskById(this.id);
      if (task === undefined) {
        this._router.navigate(['main']);
        return;
      }
      this.task = task;
    });
  }
}
