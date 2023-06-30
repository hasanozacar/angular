import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { CalendarModule } from './calendar/calendar.module';
import { TaskService } from './todo-list/task.service';
import { GlobalHandleError } from './globalHandleError';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoListModule,
    CalendarModule,
  ],
  providers:[TaskService,{provide:ErrorHandler,useClass:GlobalHandleError}],
  bootstrap: [AppComponent]
})
export class AppModule { }
