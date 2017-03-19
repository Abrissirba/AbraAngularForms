import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicFormEditComponent, DynamicFormSavedListComponent, DynamicFormViewComponent, FieldsComponent, DemoShellComponent, DemoDashboardComponent } from './components'; 

const demoRoutes: Routes = [
        {
            path: 'demo',
            component: DemoShellComponent,
            children: [
                {
                    path: 'fields',
                    component: FieldsComponent
                },
                {
                    path: 'edit-form',
                    component: DynamicFormEditComponent
                },
                {
                    path: 'edit-form/:id',
                    component: DynamicFormEditComponent
                },
                {
                    path: '',
                    component: DemoDashboardComponent
                }
            ]
        }
    ]



@NgModule({
  imports: [
    RouterModule.forChild(demoRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class DemoRoutingModule { }
