import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent {
  constructor(private route: ActivatedRoute) {}
  newTask: string = "";
  date: Date = new Date();

  ngOnInit(): void {
    this.date = new Date(this.route.snapshot.params["date"]);
  }

  tasks: Task[] = [new Task("Visit"), new Task("Call"), new Task("Gym")];
  add(todoNgForm: NgForm) {
    if(todoNgForm.touched==false)
      return;
      if(todoNgForm.valid==false)
      return;
    this.tasks.push(new Task(this.newTask));
    todoNgForm.reset({date: this.date})
    this.newTask = "";
  }
  remove(removeItem: Task) {
    var isConfirm = confirm(
      "Are you sure you want to remove: " + removeItem.title
    );
    if (isConfirm) {
      this.tasks = this.tasks.filter((item) => item !== removeItem);
    }
  }
}
class Task {
  constructor(public title: string) {}
  select() {
    this.isDone = !this.isDone;
  }
  public isDone = false;
}
