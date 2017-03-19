import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormModule } from '../dynamic-form';
import { MultiRowModule } from '../input/multi-row/multi-row.module';

import { EditDynamicFormComponent } from './components/edit-dynamic-form/edit-dynamic-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormModule,
    MultiRowModule
  ],
  declarations: [
    EditDynamicFormComponent
  ],
  exports: [
    EditDynamicFormComponent
  ]
})
export class DynamicFormAdminModule { }
