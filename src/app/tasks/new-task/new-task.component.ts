import { someAncestor } from 'tslint/lib';
import { Input, Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { Task } from '../../shared/task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  newTask: Task;

  @Output() private newTaskClicked = new EventEmitter();

  constructor() {
    this.clearForm();
    // this.newTask = emptyTask;
  }

  addTask() {
    this.newTaskClicked.emit(this.newTask);
    this.clearForm();
  }

  clearForm() {
    this.newTask = {
      name: '',
      description: '',
      isDone: false
    };
  }

}
