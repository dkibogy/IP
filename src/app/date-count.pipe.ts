import { Pipe, PipeTransform } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {
//from lms
  transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime) //returns value in miliseconds
    const secondsInDay = 86400; 
    var dateDifferenceSeconds = dateDifference*0.001; 
    var dateCounter = dateDifferenceSeconds/secondsInDay;
//number of days
    var countDays = dateDifferenceSeconds/secondsInDay;
    var days = '${countDays}';
    var months = '${monthsCount}';
    var monthsCount = Math.round(countDays);
    var years = '${yearsCount}';
    var yearsCount = Math.round(monthsCount);

    if(value <= today){
      if (countDays < 30){
        return days;
      }else if (countDays >= 30){
        if (countDays <= 365){
          return months;
        } else{
          return years;
        }
      }
    }
  }
}
