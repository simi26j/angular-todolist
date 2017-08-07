import { TasksPromiseService } from './tasks-promise.service';
import { TaskObservableService } from './task-observable.service';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Task } from '../../shared/task';

// const TASKS: Task[] = [
//   { name: 'Kupić probiotyk', description: '', isDone: true },
//   { name: 'odebrać spodnie od krawca', description: 'piątek', isDone: false },
//   { name: 'zamowic obudowe do DELLa', description: 'E7470', isDone: false },
//   { name: 'Zlecić przelew', description: 'PKO -> mBank', isDone: true },
//   { name: 'zlozyc wniosek 500+', description: '', isDone: false },
//   { name: 'kupic Clatra', description: '', isDone: false },
//   { name: 'rossmann kosmetyki do kąpieli', description: '+inne rzeczy', isDone: false },
//   { name: 'Przekazac pismo do banku', description: '!!!', isDone: false }
// ];

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  public tasks: Task[] = [];
  public errorMessage: string;

  public tasksObservable: Observable<Task[]>;
  public tasksPromise: Array<Task>;

  constructor(
    private taskObservableService: TaskObservableService,
    private taskPromiseService: TasksPromiseService
  ) {
    // this.tasks = TASKS;
  }

  ngOnInit() {
    this.getTasks();
    this.getTasksObservable();
    this.getTasksPromise();
  }

  getTasks() {
    this.taskObservableService.getTasks()
      .subscribe(
        tasks => this.tasks = tasks,
        error => this.errorMessage = <any>error
      );
  }

  getTasksObservable() {
    this.tasksObservable = this.taskObservableService.getTasks();
  }

  getTasksPromise() {
    this.taskPromiseService.getTasks()
      .then(
        tasks => this.tasks = tasks,
        error => this.errorMessage = <any>error
      );
  }

  handleTaskAdded(newTask: Task) {
    let taskExists = false;
    for (let i = 0; i < this.tasks.length; i++) {
      // if (this.tasks[i].name.toLowerCase === newTask.name.toLowerCase) {      -- dlaczego to nie dziala?
      if (this.tasks[i].name === newTask.name) {
        taskExists = true;
      }
    }
    if (!taskExists) {
      this.tasks.push(newTask);
    } else {
      alert('Cannot add duplicate tasks');
    }
  }

  handleMarkTaskDone(taskMarked: Task) {
    const theIndex = this.tasks.indexOf(taskMarked);
    if (theIndex > 0) {
      if (this.tasks[theIndex].isDone) {
        this.tasks[theIndex].isDone = false;
      } else {
        this.tasks[theIndex].isDone = true;
      }
    }
  }

  handleDeleteTask(taskDeleted: Task) {
    if (confirm('This will permanently remove this task [consider marking as done?]. Are you sure you want to do this?')) {
      const theIndex = this.tasks.indexOf(taskDeleted);
      if (theIndex > 0) { // item found
        this.tasks.splice(theIndex, 1);
      }
    } else {
      return true;
    }
  }

}
