import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoListComponent } from "./todo-list.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { FormsModule } from "@angular/forms";
import { TaskService } from "./task.service";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule,MatDatepickerModule,FormsModule,HttpClientModule],
  exports:[TodoListComponent],
  providers:[TaskService]
})
export class TodoListModule {}
