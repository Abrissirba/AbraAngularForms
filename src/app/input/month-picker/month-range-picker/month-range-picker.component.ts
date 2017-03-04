import { Component, OnInit, Input, Output, EventEmitter, forwardRef, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment';

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

  value:any = {};

  @Input() startPickerOptions: any = {
    years: {}
  }

  @Input() endPickerOptions: any = {
    years: {}
  }

  constructor() { }

  ngOnInit() {
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
    this.endPickerOptions.years.min = this.value.start.year;
    // this.startPicker.setStartRange(this.startPicker.getDate());
    // this.endPicker.setStartRange(this.startPicker.getDate());
    // this.endPicker.setMinDate(this.startPicker.getDate());
  }

  updateEndDate() {
    this.startPickerOptions.years.max = this.value.end.year;
  };

 // ControlValueAccessor implementation
  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  public writeValue(val: any) {
    this.value = val || {};
  }

  public registerOnChange(fn: (_: any) => void): void { this._onChange = fn; }
  public registerOnTouched(fn: () => void): void { this._onTouched = fn; }
}