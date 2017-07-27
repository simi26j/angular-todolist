import { Task } from '../task';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {

  @Input() name : Task; 
  @Output() public itemDelete = new EventEmitter();

  constructor() { }

  deleteItem() {    
    this.itemDelete.emit(this.name);    
  }

}
