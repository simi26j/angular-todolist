import { Task } from '../../shared/task';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskListByNamePipe'
})
export class TaskListByNamePipePipe implements PipeTransform {

  transform(tasks: Array<Task>, filter: string): any {
    if (filter) {
      filter = filter.toLocaleLowerCase();
      return filter ? tasks.filter( task => task.name.toLocaleLowerCase().indexOf(filter) !== -1) : tasks;
    } else {
      return tasks;
    }
  }

}
