import {Injectable} from "@angular/core";
import moment from "moment";

@Injectable()
export class UtilService {

  constructor() {
  }

  static getEpoch(): number {
    return moment().unix();
  }

  static getCalendarDay(epoch: number): string {
    if (!epoch) {
      return null;
    }
    let timeString = 'h:mm A';
    return moment(epoch * 1000).calendar(null, {
      sameDay: '[Today] ' + timeString,
      lastDay: '[Yesterday] ' + timeString,
      sameElse: 'MM/DD ' + timeString
    });
  }
}

