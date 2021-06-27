import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Date'
})
export class DatePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    
    const date = new Date(value);
    const dateToStr = date.toUTCString().split(' ');
    const cleanDate = dateToStr[2] + '. ' + dateToStr[1] ;

    return cleanDate;
  }

}
