import { Injectable } from "@angular/core";
import { BehaviorSubject, last, map, Observable, tap } from "rxjs";
import { NewTask } from "./new-task.dto";
import { Task } from "./task.dto";
import { HttpClient } from "@angular/common/http";

const baseUrl="http://localhost:3001/task/";

@Injectable()
export class TaskService {
  constructor(private httpClient: HttpClient) {}

  private tasks = new BehaviorSubject<Task[]>([]);

  getAllTasks(date:Date): Observable<Task[]> {
    this.httpClient
      .get<Task[]>(baseUrl+date)
      .pipe(tap(console.log), map(TaskService.mapTaskItems), tap(console.log))
      .subscribe((t) => this.tasks.next(t));
    return this.tasks;
  }
  private static mapTaskItems(items: { title: string }[]) {
    return items.map((item) => new Task(item.title));
  }
  addTask(date:Date, newTask: NewTask) {
    var updatedData = this.tasks.value.concat(new Task(newTask.title));
    this.httpClient
      .post(baseUrl+date, newTask)
      .subscribe(() => this.tasks.next(updatedData));
  }
  removeTask(date:Date,removeItem: Task) {
    var updatedData = this.tasks.value.filter((item) => item !== removeItem);
    this.httpClient
      .delete(baseUrl+date+"/"+removeItem.title)
      .subscribe(() => this.tasks.next(updatedData));
  }
}
