import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from '../form-base/form-base.component';
import { DynamicFormMultiRowModel } from '../../models';

@Component({
  selector: 'app-form-multi-row',
  templateUrl: './form-multi-row.component.html',
  styleUrls: ['./form-multi-row.component.scss']
})
export class FormMultiRowComponent extends FormBaseComponent<DynamicFormMultiRowModel> implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
