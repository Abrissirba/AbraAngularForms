import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from '../form-base/form-base.component';
import { DynamicFormInputModel } from '../../models';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent extends FormBaseComponent<DynamicFormInputModel> implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {

  }

}
