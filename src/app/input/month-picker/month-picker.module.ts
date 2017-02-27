import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthPickerComponent } from './month-picker/month-picker.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MonthPickerComponent],
  exports: [
    MonthPickerComponent
  ]
})
export class MonthPickerModule { }
