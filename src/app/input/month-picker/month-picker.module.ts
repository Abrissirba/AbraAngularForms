import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthPickerComponent } from './month-picker/month-picker.component';
import { MonthRangePickerComponent } from './month-range-picker/month-range-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonthRangePickerMinRangeDirective } from './month-range-picker/validators/month-range-picker-min-range.directive';
import { MonthRangePickerMaxRangeDirective } from './month-range-picker/validators/month-range-picker-max-range.directive';
import { MonthRangePickerLockedRangeDirective } from './month-range-picker/validators/month-range-picker-locked-range.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  declarations: [
    MonthPickerComponent, 
    MonthRangePickerComponent, 
    MonthRangePickerMinRangeDirective, 
    MonthRangePickerMaxRangeDirective, MonthRangePickerLockedRangeDirective,
  ],
  exports: [
    MonthPickerComponent,
    MonthRangePickerComponent,
    MonthRangePickerMinRangeDirective, 
    MonthRangePickerMaxRangeDirective,
  ]
})
export class MonthPickerModule { }
