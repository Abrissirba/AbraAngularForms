import * as moment from 'moment';

export class DateHelper {
    public static toMoment(year: number, month: number, day: number, startAtZero = true) {
        let monthString = month + 1 + "";
        monthString = monthString.length === 1 ? "0" + monthString : monthString;
        let dayString = day + 1 + "";
        dayString = dayString.length === 1 ? "0" + dayString : monthString;
        return moment(`${year}-${monthString}-${dayString}`);
    }

}