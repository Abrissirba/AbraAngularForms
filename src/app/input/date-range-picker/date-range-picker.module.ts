import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from '../date-picker/date-picker.module';
import { DateRangePickerComponent } from './date-range-picker.component';
import { DateRangePickerMaxRangeDirective } from './validators/date-range-picker-max-range.directive';
import { DateRangePickerMinRangeDirective } from './validators/date-range-picker-min-range.directive';
import { DateRangePickerLockedRangeDirective } from './validators/date-range-picker-locked-range.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DatePickerModule
  ],
  declarations: [
    DateRangePickerComponent,
    DateRangePickerMaxRangeDirective,
    DateRangePickerMinRangeDirective, 
    DateRangePickerLockedRangeDirective
  ],
  exports: [
    DateRangePickerComponent,
    DateRangePickerMaxRangeDirective,
    DateRangePickerMinRangeDirective
  ]
})
export class DateRangePickerModule { }
