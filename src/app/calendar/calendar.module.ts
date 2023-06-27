import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    RouterModule
  ],
  exports: [
      CalendarComponent
    ]
})
export class CalendarModule { }
