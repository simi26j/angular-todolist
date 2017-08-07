import { Task } from '../../../shared/task';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskListDonePipe'
})
export class TaskListDonePipePipe implements PipeTransform {

  transform(allTasks: Task[]) {
    return allTasks.filter(task => task.isDone);
  }

}
