import { Injectable } from '@nestjs/common';

@Injectable()
export class DateUtils {
  formatDate(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  // Format a date to a string in ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ)
  formatDateISO(date: Date): string {
    return date.toISOString();
  }

  // Format a date to a string in a custom format (e.g., "YYYY-MM-DD")
  formatDateCustom(date: Date, format: string = 'YYYY-MM-DD'): string {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return format.replace('YYYY', year).replace('MM', month).replace('DD', day);
  }

  // Get the difference in days between two dates
  getDaysDifference(date1: Date, date2: Date): number {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  // Check if a year is a leap year
  isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  // Check if a date is today
  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  }

  // Check if a date is in the future
  isFuture(date: Date): boolean {
    return date.getTime() > Date.now();
  }

  // Check if a date is in the past
  isPast(date: Date): boolean {
    return date.getTime() < Date.now();
  }
}
