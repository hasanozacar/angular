import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from "./calendar/calendar.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

const routes: Routes = [
  {component:CalendarComponent, path: ''},
  {component:TodoListComponent, path: 'todo-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
