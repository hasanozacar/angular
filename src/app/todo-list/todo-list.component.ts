import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  constructor() {

  }
  ngOnInit():void {

  }

  tasks: Task[] = [new Task("Visit") ,new Task("Call"),new Task("Gym")];
  add(value: string) {
    this.tasks.push(new Task(value));
  }
  remove(removeItem: Task) {
    var isConfirm = confirm("Are you sure you want to remove: " + removeItem.title);
    if (isConfirm) {
      this.tasks = this.tasks.filter((item) => item !== removeItem);
    }
  }

}
class Task {
  constructor(public title: string) {

  }
  select() {
    this.isDone=!this.isDone;
  }
  public isDone= false;
}
