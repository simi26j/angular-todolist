import { Input, Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent {

  newTask : Task;

  @Output() private newItemClicked = new EventEmitter();

  constructor() { 
    this.newTask = new Task();
  }

  addItem() {     
    let anotherTask = new Task();
    anotherTask.name = this.newTask.name;
    this.newItemClicked.emit(anotherTask);
    this.newTask.name = '';
  }

}
