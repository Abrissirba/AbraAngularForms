import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MonthPickerModule } from '../input/month-picker';
import { MultiRowModule } from '../input/multi-row/multi-row.module';


import { FormInputComponent } from './components/form-input/form-input.component';
import { FormBaseComponent } from './components/form-base/form-base.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicValidationComponent } from './components/dynamic-validation/dynamic-validation.component';
import { FormMultiRowComponent } from './components/form-multi-row/form-multi-row.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormMonthRangeComponent } from './components/form-month-range/form-month-range.component';
import { FormTextareaComponent } from './components/form-textarea/form-textarea.component';

import { DynamicFormService } from './services/dynamic-form.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MonthPickerModule,
    MultiRowModule
  ],
  declarations: [
    FormBaseComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    DynamicValidationComponent,
    FormInputComponent,
    FormMultiRowComponent,
    FormSelectComponent,
    FormMonthRangeComponent,
    FormTextareaComponent
  ],
  entryComponents: [
    FormInputComponent,
    FormMultiRowComponent,
    FormSelectComponent,
    FormMonthRangeComponent,
    FormTextareaComponent
  ],
  providers: [
    DynamicFormService
  ],
  exports: [
    DynamicFormComponent,
    DynamicFieldDirective
  ]
})
export class DynamicFormModule { }
