import { Component, OnInit, Input, Output, EventEmitter, forwardRef, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
var Pikaday = require('pikaday');
import { PikadayOptions } from 'pikaday';

@Component({
  selector: 'abra-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent {

  @ViewChild('input') input: ElementRef;
  public datePicker;

  @Input() options: PikadayOptions;
  @Input() value: string;
  @Input() placeholder: string;
  @Input() inputClass: string;

  defaultOptions: PikadayOptions = {
    firstDay: 1,
    // onDraw: function (drawn) {
    //   console.log(drawn) // [{month: 6, year: 2016}, {month: 7, year: 2016}]
    // }
  }

  ngAfterViewInit() {
    var options = Object.assign({}, this.defaultOptions, this.options);
    options.field = this.input.nativeElement;
    this.datePicker = new Pikaday(options);
  }

  onDateChange(value) {
    this.value = value;
    this._onChange(this.value);
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  public setEndRange(date) {
    this.datePicker.setEndRange(date);
  }

  public setStartRange(date) {
    this.datePicker.setStartRange(date);
  }

  public setMaxDate(date) {
    this.datePicker.setMaxDate(date);    
  }

  public setMinDate(date) {
    this.datePicker.setMinDate(date);
  }

  public getDate() {
    return this.datePicker.getDate();
  }

  // ControlValueAccessor implementation
  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  public writeValue(val: any) {
    this.value = val;
    if (this.datePicker) {
      this.datePicker.setDate(val);
    }
  }

  public registerOnChange(fn: (_: any) => void): void { this._onChange = fn; }
  public registerOnTouched(fn: () => void): void { this._onTouched = fn; }
}
