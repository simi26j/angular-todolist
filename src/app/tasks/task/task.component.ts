import { Task } from '../../shared/task';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent  {

  @Input() theTask: Task;
  @Output() public taskDelete = new EventEmitter();
  @Output() public taskMarkDone = new EventEmitter();

  constructor() { }

  deleteTask() {
    this.taskDelete.emit(this.theTask);
  }

  markDoneTask() {
    this.taskMarkDone.emit(this.theTask);
  }

}
