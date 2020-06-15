import { Pipe, PipeTransform } from '@angular/core';


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
    
    if (dateCounter >= 1 && value > todayWithNoTime){
      return dateCounter;
  }else{
      return 0;
  
    
      }
    }
  }
