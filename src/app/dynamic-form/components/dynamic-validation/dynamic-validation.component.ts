import { Component, OnInit, Input } from '@angular/core';
import { DynamicFormModel } from '../../models';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'abra-dynamic-validation, [abra-dynamic-validation]',
  templateUrl: './dynamic-validation.component.html',
  styleUrls: ['./dynamic-validation.component.scss']
})
export class DynamicValidationComponent implements OnInit {

  @Input() formCtrl: FormControl;

  @Input() config: DynamicFormModel;

  constructor() { }

  ngOnInit() {
  }

}
