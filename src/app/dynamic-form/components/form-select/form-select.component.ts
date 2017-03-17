import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from '../form-base/form-base.component';
import { DynamicFormSelectModel } from '../../models';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent extends FormBaseComponent<DynamicFormSelectModel> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    
  }

}
