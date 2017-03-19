import { Component, OnInit, Input, Output, EventEmitter, forwardRef, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment';
import { DateHelper } from '../../common/date-helpers';
import { MonthPickerOptions, MonthPickerValue, MonthRangePickerValue } from '../models';
@Component({
  selector: 'abra-month-range-picker',
  templateUrl: './month-range-picker.component.html',
  styleUrls: ['./month-range-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MonthRangePickerComponent),
      multi: true
    }
  ]
})
export class MonthRangePickerComponent implements OnInit, ControlValueAccessor {

  // if one or twop inputs should be used
  @Input() singleInput: boolean = false;

  @Input() startPickerOptions: MonthPickerOptions = {};

  @Input() endPickerOptions: MonthPickerOptions = {};

  @Input() months: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // in months
  @Input() maxRange: number;

  // in months
  @Input() minRange: number;

  // in months
  @Input() lockedRange: number;

  // used if singleInput is true
  @Input() placeholder: string;

  private value: MonthRangePickerValue;
  private isOpen = false;
  private leftPos = 0;

  get inputValue() {
    if (this.value && this.value.start && this.value.end) {
      return this.months[this.value.start.month] + '. ' + this.value.start.year + ' ~ ' + this.months[this.value.end.month] + '. ' + this.value.end.year;
    }
    return "";
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    console.log(this.endPickerOptions)
  }

  onStartPickerChange(value) {
    this.updateStartDate(this.value);
    this.updateFormValue();
  }

  onEndPickerChange(value) {
    this.updateEndDate(this.value);
    this.updateFormValue();
  }

  onFocus(evt) {
    this.isOpen = true;
    this.leftPos = this.elementRef.nativeElement.offsetLeft;
  }

  onOverlayClick(evt: MouseEvent) {
    this.isOpen = false;
  }

  updateFormValue() {
    this._onChange(this.value);
  }

  updateStartDate(updatedValue: MonthRangePickerValue) {
    this.endPickerOptions.min = Object.assign({}, updatedValue.start);
    let diff = this.rangeDiff(updatedValue);
    if (this.minRange) {
      let newDate = DateHelper.toMoment(updatedValue.start.year, updatedValue.start.month, 0).add(this.minRange, 'months');
      let newDateIsAfterMax = this.endPickerOptions && this.endPickerOptions.max && newDate > DateHelper.toMoment(this.endPickerOptions.max.year, this.endPickerOptions.max.month, 0);
      if ((diff === null || diff < this.minRange) && !newDateIsAfterMax) {
        this.value.end = this.value.start = this.getValueForDate(newDate);
      }
    }
    if (this.maxRange) {
      let newDate = DateHelper.toMoment(updatedValue.start.year, updatedValue.start.month, 0).add(this.maxRange, 'months');
      if (diff > this.maxRange) {
        this.value.end = this.value.start = this.getValueForDate(newDate);
      }
    }
    if (this.lockedRange) {
      let newDate = DateHelper.toMoment(updatedValue.start.year, updatedValue.start.month, 0).add(this.lockedRange - 1, 'months');
      let newDateIsAfterMax = this.endPickerOptions && this.endPickerOptions.max && newDate > DateHelper.toMoment(this.endPickerOptions.max.year, this.endPickerOptions.max.month, 0);
      if ((diff === null || diff !== this.minRange) && !newDateIsAfterMax) {
        this.value.end = this.value.start = this.getValueForDate(newDate);
      }
    }
  }

  updateEndDate(updatedValue: MonthRangePickerValue) {
    this.startPickerOptions.max = Object.assign({}, updatedValue.end);
    let diff = this.rangeDiff(updatedValue);
    if (this.minRange) {
      let newDate = DateHelper.toMoment(updatedValue.end.year, updatedValue.end.month, 0).add(-this.minRange, 'months');
      let newDateIsAfterMin = this.startPickerOptions && this.startPickerOptions.max && newDate > DateHelper.toMoment(this.startPickerOptions.max.year, this.startPickerOptions.max.month, 0);
      if ((diff === null || diff < this.minRange) && !newDateIsAfterMin) {
        this.value.start = this.value.start = this.getValueForDate(newDate);
      }
    }
    if (this.maxRange) {
      let newDate = DateHelper.toMoment(updatedValue.end.year, updatedValue.end.month, 0).add(-this.maxRange, 'months');
      if (diff > this.maxRange) {
        this.value.start = this.value.start = this.getValueForDate(newDate);
      }
    }
    if (this.lockedRange) {
      let newDate = DateHelper.toMoment(updatedValue.end.year, updatedValue.end.month, 0).add(-this.lockedRange + 1, 'months');
      let newDateIsAfterMin = this.startPickerOptions && this.startPickerOptions.max && newDate > DateHelper.toMoment(this.startPickerOptions.max.year, this.startPickerOptions.max.month, 0);
      if ((diff === null || diff !== this.lockedRange) && !newDateIsAfterMin) {
        this.value.start = this.getValueForDate(newDate);
      }
    }
  };

  getValueForDate(date: moment.Moment): MonthPickerValue {
    return {
      year: date.year(),
      month: date.month(),
      monthName: this.months[date.month()]
    }
  }

  startMonthClass = (month, year) => {
    if (this.value && this.value.start) {
      //return this.isActive(this.value.end, month, year) + this.inRange(month, year);
    }
  }

  endMonthClass = (month, year) => {
    if (this.value && this.value.end) {
      //return this.isActive(this.value.start, month, year) + this.inRange(month, year);
    }
  }

  isActive(value, month, year) {
    return value && value.year === year && value.month === month ? 'active ' : '';
  }

  inRange(month, year) {
    let isAfterStart = this.value.start ? year * 10 + month >= this.value.start.year * 10 + this.value.start.month : true;
    let isBeforeEnd = this.value.end ? year * 10 + month <= this.value.end.year * 10 + this.value.end.month : true;
    return isAfterStart && isBeforeEnd ? "in-range" : "";
  }

  rangeDiff(value) {
    if (value.start && value.end) {
      return Math.abs(DateHelper.toMoment(value.start.year, value.start.month, 0).diff(DateHelper.toMoment(value.end.year, value.end.month, 0), 'months'));
    }
    return null;
  }

  // ControlValueAccessor implementation
  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  public writeValue(val: any) {
    this.value = val || {};
  }

  public registerOnChange(fn: (_: any) => void): void { this._onChange = fn; }
  public registerOnTouched(fn: () => void): void { this._onTouched = fn; }
}