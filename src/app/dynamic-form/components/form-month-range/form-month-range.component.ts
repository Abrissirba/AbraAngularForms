import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from '../form-base/form-base.component';
import { DynamicFormInputModel } from '../../models';
import { DynamicFormValidatorKeys } from '../../utils/validators.utils';
@Component({
  selector: 'app-form-month-range',
  templateUrl: './form-month-range.component.html',
  styleUrls: ['./form-month-range.component.scss']
})
export class FormMonthRangeComponent extends FormBaseComponent<DynamicFormInputModel> implements OnInit {

  protected minRange;
  protected maxRange;
  protected lockedRange;

  constructor() { 
    super();
  }

  ngOnInit() {
    this.minRange = this.config.getValidorValue(DynamicFormValidatorKeys.MinRange);
    this.maxRange = this.config.getValidorValue(DynamicFormValidatorKeys.MaxRange);
    this.lockedRange = this.config.getValidorValue(DynamicFormValidatorKeys.LockedRange);
  }
}
