import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { StorageService } from '../../../common/services/storage.service';

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
    private _storageService: StorageService
  ) {}

  public ngOnInit(): void {
    this._route.queryParams.subscribe((params: Params) => {
      this.id = Number(params.id);
      this.task = this._storageService.getTaskById(this.id);
    });
  }
}
