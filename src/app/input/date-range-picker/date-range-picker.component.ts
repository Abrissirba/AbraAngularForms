import { Component, OnInit, Input, Output, EventEmitter, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import * as moment from 'moment';

@Component({
  selector: 'abra-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangePickerComponent),
      multi: true
    }
  ]
})
export class DateRangePickerComponent implements OnInit, ControlValueAccessor {
  @Input() value: {start: string, end: string} = { start: null, end: null };
  @Input() inputGroupClass: string;
  @Input() inputClass: string;
  @Input() placeholderStart: string = 'Start date';
  @Input() placeholderEnd: string = 'End date';

  @ViewChild('startPicker') startPicker: DatePickerComponent;
  @ViewChild('endPicker') endPicker: DatePickerComponent;

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
    this.startPicker.setStartRange(this.startPicker.getDate());
    this.endPicker.setStartRange(this.startPicker.getDate());
    this.endPicker.setMinDate(this.startPicker.getDate());
  }

  updateEndDate() {
    this.startPicker.setEndRange(this.endPicker.getDate());
    this.startPicker.setMaxDate(this.endPicker.getDate());
    this.endPicker.setEndRange(this.endPicker.getDate());
  };

  // private updateOtherDateWhenLocked(changedDate: string) {
  //   if (this.config.getValidatorOfType("LOCKEDDIFF")) {
  //     var diff = parseInt(this.config.getValidatorOfType("LOCKEDDIFF").value);
  //     if (changedDate === "start") {
  //       this.value.end = moment(this.value.start).add(diff, 'month').format("YYYY-MM-DD");
  //     }
  //     else {
  //       this.value.start = moment(this.value.end).add(-diff, 'month').format("YYYY-MM-DD");
  //     }
  //   }
  // }

  // ControlValueAccessor implementation
  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  public writeValue(val: any) {
    this.value = val ? val : { start: null, end: null };
  }

  public registerOnChange(fn: (_: any) => void): void { this._onChange = fn; }
  public registerOnTouched(fn: () => void): void { this._onTouched = fn; }
}
