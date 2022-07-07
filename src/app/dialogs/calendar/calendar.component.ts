import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  date;
  hasChanged = false;

  constructor(protected ref: NbDialogRef<AppComponent>) {
    this.date = new Date();
  }

  submit() {
    this.ref.close(this.date);
  }

  onChange(selectedDate: any) {
    this.hasChanged = true;
    this.date = selectedDate;
  }

  isWeekend(date: Date) {
    var gsDayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    var dayName = gsDayNames[date.getDay()];
    if (dayName == 'Saturday' || dayName == 'Sunday') {
      return true;
    }
    return false;
  }

  isPreviousDay(date: Date) {
    var today = new Date();
    if (today < date) {
      return false;
    }
    return true;
  }
}
