import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthPickerComponent } from './month-picker/month-picker.component';
import { MonthRangePickerComponent } from './month-range-picker/month-range-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  declarations: [
    MonthPickerComponent, 
    MonthRangePickerComponent
  ],
  exports: [
    MonthPickerComponent,
    MonthRangePickerComponent
  ]
})
export class MonthPickerModule { }
