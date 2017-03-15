import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthPickerComponent } from './month-picker/month-picker.component';
import { MonthRangePickerComponent } from './month-range-picker/month-range-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonthRangePickerMinLengthDirective } from './month-range-picker/validators/month-range-picker-min-length.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  declarations: [
    MonthPickerComponent, 
    MonthRangePickerComponent, MonthRangePickerMinLengthDirective
  ],
  exports: [
    MonthPickerComponent,
    MonthRangePickerComponent
  ]
})
export class MonthPickerModule { }
