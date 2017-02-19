import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from './date-picker/date-picker.module';
import { DateRangePickerModule } from './date-range-picker/date-range-picker.module';
import { MultiRowModule } from './multi-row/multi-row.module';

@NgModule({
  imports: [
    CommonModule,
    DatePickerModule
  ],
  exports: [
    DatePickerModule,
    DateRangePickerModule,
    MultiRowModule
  ],
  declarations: []
})
export class AbraInputModule { }
