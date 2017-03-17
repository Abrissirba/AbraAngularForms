import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDynamicFormModel, DynamicFormModel } from '../../models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent<T extends DynamicFormModel> implements OnInit {

  @Input() config: T;
  @Input() group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  getSettingsValue(key: string) {
    return this.config.settings ? this.config.settings[key] : null;
  }

}
