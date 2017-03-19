import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoRoutingModule } from './demo.routing.module';
import { AbraInputModule } from '../input';
import { DynamicFormModule } from '../dynamic-form';
import { DynamicFormAdminModule } from '../dynamic-form-admin'; 

import { 
  FieldsComponent, 
  DynamicFormEditComponent, 
  DynamicFormSavedListComponent, 
  DynamicFormViewComponent,
  DemoShellComponent,
  DemoDashboardComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    AbraInputModule,
    DynamicFormModule,
    DynamicFormAdminModule
  ],
  declarations: [
    DemoShellComponent,
    FieldsComponent, 
    DynamicFormEditComponent, 
    DynamicFormSavedListComponent, 
    DynamicFormViewComponent, DemoShellComponent, DemoDashboardComponent
  ]
})
export class DemoModule { }
