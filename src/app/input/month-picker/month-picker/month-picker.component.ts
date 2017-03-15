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
  @Input() years: any;

  value: any = {
    year: null,
    month: null
  };

  isOpen = false;
  isNextValid = true;
  isPrevValid = true;

  padDate = new Date();

  leftPos = 0;

  get inputValue() {
    if(this.value) {
      return this.months[this.value.month] + '. ' + this.value.year;
    }
    return "";
  }

  get padYear() {
    return this.padDate.getFullYear();
  }

  get padMonth() {
    return this.value ? this.months.indexOf(this.value.month) : null;
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  onFocus(evt) {
    this.isOpen = true;
    this.leftPos = this.elementRef.nativeElement.offsetLeft;
  }

  onOverlayClick(evt: MouseEvent) {
    this.isOpen = false;
  }

  isActiveMonth(month, year) {
    if (this.value) {
      return this.value.month === this.months.indexOf(month) && this.value.year === this.padYear;
    }
    return false;
  }

  onMonthClicked(index: number, month: string, evt: MouseEvent) {
    if (!this.value) {
      this.value = {}
    }

    this.value.year = this.padYear;
    this.value.month = index;
    this.isOpen = false;
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
    if(this.years && this.years.min && date.getFullYear() < this.years.min) {
      return false;
    }
    if(this.years && this.years.max && date.getFullYear() > this.years.max) {
      return false;
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
