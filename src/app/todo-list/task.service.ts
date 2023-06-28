import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewTask } from './new-task.dto';
import { Task } from './task.dto';

// @Injectable({
//   providedIn: 'root'
// })
export class TaskService {

  constructor() { }
  
  private tasks=new BehaviorSubject([new Task("Visit"), new Task("Call"), new Task("Gym")]);

  getAllTasks():Observable<Task[]>{
    return this.tasks;
  }
  addTask(newTask:NewTask){
     var updatedData= this.tasks.value.concat(new Task(newTask.title));
     this.tasks.next(updatedData)
  }
  removeTask(removeItem:Task){
    var updatedData = this.tasks.value.filter((item) => item !== removeItem);
    this.tasks.next(updatedData);
  }

}
