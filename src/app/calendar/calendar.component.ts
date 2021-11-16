import { Component, OnInit } from '@angular/core';

import {
  DayService,
  MonthAgendaService,
  MonthService,
  ScheduleModule,
  TimelineMonthService,
  TimelineViewsService,
  TimelineYearService,
  WeekService,
  WorkWeekService,
  YearService,
  ScheduleComponent,
  View
} from "@syncfusion/ej2-angular-schedule";
import {
  EventSettingsModel,
  ResizeService,
  DragAndDropService
} from "@syncfusion/ej2-angular-schedule";
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers:[ 
    DayService,
    MonthAgendaService,
    MonthService,
    ScheduleModule,
    TimelineMonthService,
    TimelineViewsService,
    TimelineYearService,
    WeekService,
    WorkWeekService,
    YearService,
    ScheduleComponent,
    ]
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public setView:View = 'Month';
  public setViews:View[] = ['Day','Week','Month'];
}
