import { Component, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent {

  items : Task[] = [];

  constructor() { 
    let t1 = new Task('kupić chleb');
    let t2 = new Task('obrać pyry');

    this.items.push(t1);
    this.items.push(t2);
  }  

  handleItemAdded(newTask : Task) {
    this.items.push(newTask);
  }

  handleDeleteItem(delName : Task) {    
    let newItems : Task[] = [];
    let theIndex = this.items.indexOf(delName);
    this.items.splice(theIndex, 1);    
  }

}
