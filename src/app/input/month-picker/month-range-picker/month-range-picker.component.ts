import { Component, OnInit, Input, Output, EventEmitter, forwardRef, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment';
import { DateHelper } from '../../common/date-helpers';
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

  @Input() startPickerOptions: any = {}

  @Input() endPickerOptions: any = {}

  @Input() months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  @Input() maxRange;

  @Input() minRange;

  @Input() placeholder;

  value: any = {};
  isOpen = false;
  leftPos = 0;

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
    //this.updateOtherDateWhenLocked("start");
    this.updateStartDate();
    this.updateFormValue();
  }

  onEndPickerChange(value) {
    //his.updateOtherDateWhenLocked("end");
    this.updateEndDate();
    this.updateFormValue();
  }

  updateFormValue() {
    this._onChange(this.value);
  }

  updateStartDate() {
    this.endPickerOptions.min = Object.assign({}, this.value.start);
    let diff = this.rangeDiff(this.value);
    if (this.minRange) {
      let newDate = DateHelper.toMoment(this.value.start.year, this.value.start.month, 0).add(this.minRange, 'months');
      let newDateIsAfterMax = this.endPickerOptions && this.endPickerOptions.max && newDate > DateHelper.toMoment(this.endPickerOptions.max.year, this.endPickerOptions.max.month, 0);
      if ((diff === null || diff < this.minRange) && !newDateIsAfterMax) {
        this.value.end = {
          year: newDate.year(),
          month: newDate.month()
        }
      }
    }
    if (this.maxRange) {
      let newDate = DateHelper.toMoment(this.value.start.year, this.value.start.month, 0).add(this.maxRange, 'months');
      if (diff > this.maxRange) {
        this.value.end = {
          year: newDate.year(),
          month: newDate.month()
        }
      }
    }
  }

  updateEndDate() {
    this.startPickerOptions.max = Object.assign({}, this.value.end);
    let diff = this.rangeDiff(this.value);
    if (this.minRange) {
      let newDate = DateHelper.toMoment(this.value.end.year, this.value.end.month, 0).add(-this.minRange, 'months');
      let newDateIsAfterMin = this.startPickerOptions && this.startPickerOptions.max && newDate > DateHelper.toMoment(this.startPickerOptions.max.year, this.startPickerOptions.max.month, 0);
      if ((diff === null || diff < this.minRange) && !newDateIsAfterMin) {
        this.value.start = {
          year: newDate.year(),
          month: newDate.month()
        }
      }
    }
    if (this.maxRange) {
      let newDate = DateHelper.toMoment(this.value.end.year, this.value.end.month, 0).add(-this.maxRange, 'months');
      if (diff > this.maxRange) {
        this.value.start = {
          year: newDate.year(),
          month: newDate.month()
        }
      }
    }
  };

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

  onFocus(evt) {
    this.isOpen = true;
    this.leftPos = this.elementRef.nativeElement.offsetLeft;
  }

  onOverlayClick(evt: MouseEvent) {
    this.isOpen = false;
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