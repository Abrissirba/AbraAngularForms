import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as AbraValidators from '../../../input/validators';

@Component({
  selector: 'abra-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class FieldsComponent implements OnInit {

  title = 'abra works!';
  value = {};
  form: FormGroup;

  range = 3;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      datePicker: [null, Validators.required],
      dateRangePicker: [null, AbraValidators.DateRangePickerMinRangeValidator(3)],
      multiRow: [null],
      monthPicker: [null],
      monthRangePicker: [null, AbraValidators.MonthRangePickerLockedRangeValidator(5)]
    });

    this.form.valueChanges.subscribe(this.onChange.bind(this));
  }

  ngOnInit() {

  }

  onChange(evt) {
    console.log(this.form.get('dateRangePicker').errors);
  }

}
