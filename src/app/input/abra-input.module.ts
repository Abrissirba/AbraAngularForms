import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from './date-picker/date-picker.module';
import { DateRangePickerModule } from './date-range-picker/date-range-picker.module';
import { MultiRowModule } from './multi-row/multi-row.module';
import { MonthPickerModule } from './month-picker/month-picker.module';

@NgModule({
  imports: [
    CommonModule,
    DatePickerModule
  ],
  exports: [
    DatePickerModule,
    DateRangePickerModule,
    MultiRowModule,
    MonthPickerModule
  ],
  declarations: []
})
export class AbraInputModule { }
