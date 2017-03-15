import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from '../date-picker/date-picker.module';
import { DateRangePickerComponent } from './date-range-picker.component';
import { DateRangePickerMaxLengthDirective } from './validators/date-range-picker-max-length.directive';
import { DateRangePickerMinLengthDirective } from './validators/date-range-picker-min-length.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DatePickerModule
  ],
  declarations: [ 
    DateRangePickerComponent, 
    DateRangePickerMaxLengthDirective, 
    DateRangePickerMinLengthDirective 
  ],
  exports: [ 
    DateRangePickerComponent,
    DateRangePickerMaxLengthDirective, 
    DateRangePickerMinLengthDirective 
  ]
})
export class DateRangePickerModule { }
