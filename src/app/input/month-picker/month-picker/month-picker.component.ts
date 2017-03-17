import { Component, OnInit, Input, Output, EventEmitter, forwardRef, ViewChild, ElementRef, ViewEncapsulation, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MonthPickerValue } from '../models';

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

  @Input() showInput = true;
  @Input() keepOpen = false;
  @Input() months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  @Input() years: Array<number>;
  @Input() titleSuffix: string = "";
  @Input() min: MonthPickerValue;
  @Input() max: MonthPickerValue;
  @Input() monthClass: (month: number, year: number) => string;
  @Input() placeholder: string = "";
  @Input() disabled: boolean = false;
  @Input() padYear = new Date().getFullYear();

  protected value: MonthPickerValue;
  protected isNextYearValid = true;
  protected isPrevYearValid = true;
  protected isOpen = false;
  protected leftPos = 0;

  protected get inputValue() {
    if (this.value) {
      return this.months[this.value.month] + '. ' + this.value.year;
    }
    return "";
  }

  protected get padMonth() {
    return this.value ? this.value.month : null;
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.isOpen = this.keepOpen;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.validate();
  }

  onFocus(evt) {
    this.isOpen = true;
    this.leftPos = this.elementRef.nativeElement.offsetLeft;
  }

  onOverlayClick(evt: MouseEvent) {
    this.isOpen = false || this.keepOpen;
  }
    onMonthClicked(month: number, evt: MouseEvent) {
    if (!this.isDisabledMonth(month, this.padYear)) {
      if (!this.value) {
        this.value = <any>{}
      }

      this.value.year = this.padYear;
      this.value.month = month;
      this.isOpen = false || this.keepOpen;
      this._onChange(this.value);
    }
  }

  onGoPrevClick(evt: MouseEvent) {
    if (this.isYearSelectable(-1)) {
      --this.padYear;
      this.validate();
    }
  }

  onGoNextClick(evt: MouseEvent) {
    if (this.isYearSelectable(1)) {
      ++this.padYear;
      this.validate();
    }
  }

  isActiveMonth(month, year) {
    if (this.value) {
      return this.value.month === month && this.value.year === this.padYear;
    }
    return false;
  }

  private _monthClass(month, year) {
    if (this.monthClass) {
      return this.monthClass(month, year);
    }
  }

  validate() {
    this.isPrevYearValid = this.isYearSelectable(-1);
    this.isNextYearValid = this.isYearSelectable(1);
  }

  isDisabledMonth(month, year) {
    if (this.min && year <= this.min.year && month < this.min.month) {
      return true;
    }
    if (this.max && year >= this.max.year && month > this.max.month) {
      return true;
    }
    return false;
  }

  isYearSelectable(monthChange: number) {
    let newPadYear = this.padYear + monthChange;
    if (this.years && Object.prototype.toString.call(this.years) === '[object Array]') {
      return this.years.indexOf(newPadYear) > -1;
    }
    if (monthChange < 0 && this.min && newPadYear < this.min.year) {
      return false;
    }
    if (monthChange > 0 && this.max && newPadYear > this.max.year) {
      return false;
    }
    return true;
  }


  // ControlValueAccessor implementation
  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  public writeValue(val: any) {
    this.value = val;
    if (this.value) {
      this.padYear = this.value.year || this.padYear;
      this.validate();
    }
  }

  public registerOnChange(fn: (_: any) => void): void { this._onChange = fn; }
  public registerOnTouched(fn: () => void): void { this._onTouched = fn; }
}
