import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { NewTask } from "./new-task.dto";
import { Task } from "./task.dto";
import { TaskService } from "./task.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent {
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
    ) {}
  newTask:NewTask =new NewTask();
  tasks=this.taskService.getAllTasks(this.route.snapshot.params["date"]);

  ngOnInit(): void {
    var strDate = this.route.snapshot.params["date"];

    this.newTask = new NewTask(this.newTask.title,new Date(strDate));
  }

  add(todoNgForm: NgForm) {
    if(todoNgForm.touched==false)
      return;
      if(todoNgForm.valid==false)
      return;

   this.taskService.addTask(this.newTask.date, this.newTask)
    todoNgForm.reset({date: this.newTask.date})
    this.newTask.title = "";
  }
  remove(removeItem: Task) {
    var isConfirm = confirm(
      "Are you sure you want to remove: " + removeItem.title
    );
    if (isConfirm) {
      this.taskService.removeTask(this.newTask.date,removeItem)
    }
  }
}

