import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoListComponent } from "./todo-list.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule,MatDatepickerModule,FormsModule],
  exports:[TodoListComponent]
})
export class TodoListModule {}
