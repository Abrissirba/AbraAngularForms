import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormModel } from '../../models';
import { DynamicFormService } from '../../services';
@Component({
  selector: 'app-dynamic-form2',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent2 implements OnInit {
  @Input() config: Array<DynamicFormModel> = [];

  formGroup: FormGroup;

  constructor(private dynamicFormService: DynamicFormService) {}

  ngOnInit() {
    this.formGroup = this.dynamicFormService.toFormGroup(this.config);
  }
}