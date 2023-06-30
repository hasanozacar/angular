import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  ngOnInit():void{
    throw new Error("Failed to load the calender");
  }

  selectedDate = new Date();

}
