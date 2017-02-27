import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AbraValidators } from './input';

@Component({
  selector: 'abra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'abra works!';
  value = {};
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // this.form = this.formBuilder.group({
    //   datePicker: [null, Validators.required],
    //   dateRangePicker: [null, AbraValidators.dateRangePickerMinLength(3)],
    //   multiRow: [null]
    // });
  }

  onChange(evt) {
    console.log(evt);
    console.log(this.value);
  }
}
