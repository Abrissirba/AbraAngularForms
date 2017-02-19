import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'abra-multi-row',
  templateUrl: './multi-row.component.html',
  styleUrls: ['./multi-row.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiRowComponent),
      multi: true
    }
  ]
})
export class MultiRowComponent implements OnInit, ControlValueAccessor {
  @Input() value: Array<any>;
  @Input() inputType: string = "text";
  @Input() rowClass: string;
  @Input() inputClass: string;
  @Input() inputColumnClass: string;
  @Input() buttonColumnClas: string;
  @Input() buttonAddClass: string;
  @Input() buttonRemoveClass: string;

  constructor() { }

  ngOnInit() {
  }

  removeRow(rowValue, index: number) {
    this.value.splice(index, 1);
    this._onChange(this.value);
  }

  addRow() {
    this.value.push(null);
    this._onChange(this.value);
  }

  onInputRowChange(value, i) {
    this._onChange(this.value);
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  // ControlValueAccessor implementation
  private _onChange = (_: any) => { };
  private _onTouched = () => { };

  public writeValue(val: any) {
    this.value = val ? val : [null];
  }

  public registerOnChange(fn: (_: any) => void): void { this._onChange = fn; }
  public registerOnTouched(fn: () => void): void { this._onTouched = fn; }


}
