import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from '../form-base/form-base.component';
import { DynamicFormTextAreaModel } from '../../models';

@Component({
  selector: 'app-form-textarea',
  templateUrl: './form-textarea.component.html',
  styleUrls: ['./form-textarea.component.scss']
})
export class FormTextareaComponent  extends FormBaseComponent<DynamicFormTextAreaModel>  implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
