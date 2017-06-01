import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  public transform(taskList: task[], searchValue?: string): task[] {
    if (!taskList || ! searchValue) {
      return taskList;
    }
    return taskList
      .filter((task: task) => `${task.name} `
        .toLowerCase()
        .includes(searchValue));
  }
}
