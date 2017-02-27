import { Component, OnInit, Input, Output, EventEmitter, forwardRef, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'abra-month-picker',
  templateUrl: './month-picker.component.html',
  styleUrls: ['./month-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MonthPickerComponent),
      multi: true
    }
  ]
})
export class MonthPickerComponent implements OnInit, ControlValueAccessor {

  @Input() months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  @Input() years: any = [2016, 2017];

  value: any = {
    year: null,
    month: null
  };

  isOpen = false;
  isNextValid = true;
  isPrevValid = true;

  padDate = new Date();

  get padYear() {
    return this.padDate.getFullYear();
  }

  get padMonth() {
    return this.value ? this.months.indexOf(this.value.month) : null;
  }

  constructor() { }

  ngOnInit() {
  }

  onFocus(evt) {
    this.isOpen = true;
  }

  onOverlayClick(evt: MouseEvent) {
    this.isOpen = false;
  }

  isActiveMonth(month, year) {
    if (this.value) {
      return this.value.month === month && this.value.year === this.padYear;
    }
    return false;
  }

  onMonthClicked(index: number, month: string, evt: MouseEvent) {
    if (!this.value) {
      this.value = {}
    }

    this.value.year = this.padYear;
    this.value.month = index;
    this._onChange(this.value);
  }

  onGoPrevClick(evt: MouseEvent) {
    if(this.isValid(this.addYear(-1))) {
      this.padDate = this.addYear(-1);
      this.validate();
    }
  }

  onGoNextClick(evt: MouseEvent) {
    if(this.isValid(this.addYear(1))) {
      this.padDate = this.addYear(1);
      this.validate();
    }
  }

  validate() {
    this.isPrevValid = this.isValid(this.addYear(-1));
    this.isNextValid = this.isValid(this.addYear(1));
  }

  isValid(date) {
    if (this.years && Object.prototype.toString.call(this.years) === '[object Array]') {
      return this.years.indexOf(date.getFullYear()) > -1;
    }
    else if(this.years && this.years.min) {

    }
    return true;
  }

  addYear(add: number) {
    return new Date(new Date().setFullYear(this.padDate.getFullYear() + add));
  }

  // ControlValueAccessor implementation
  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  public writeValue(val: any) {
    this.value = val;
    if (this.value) {
      this.padDate = new Date(this.value.year, this.value.month);
      this.validate();
    }
  }

  public registerOnChange(fn: (_: any) => void): void { this._onChange = fn; }
  public registerOnTouched(fn: () => void): void { this._onTouched = fn; }
}
