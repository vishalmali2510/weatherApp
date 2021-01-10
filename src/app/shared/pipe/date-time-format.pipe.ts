import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimeFormat'
})
export class DateTimeFormatePipe implements PipeTransform {
  transform(date: any, format?: string): string {
    if (date) {
      let d = new Date(parseInt(date) * 1000);
      let timezone: string;
      if (typeof (date) == 'string') {
        timezone = date.split('+')[1];
      }
      // date = new Date(date).toISOString();
      if (!format) {
        format = 'MMM d, h:mm aaa';
      }
      return new DatePipe('en-US').transform(d, format, timezone);
    }
  }
}
