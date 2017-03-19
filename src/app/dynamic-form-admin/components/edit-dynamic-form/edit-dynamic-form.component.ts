import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DynamicFormService, IDynamicFormModel, DynamicFormModel } from '../../../dynamic-form';
import * as Fields from '../../../dynamic-form/models/fields';

@Component({
  selector: 'abra-edit-dynamic-form',
  templateUrl: './edit-dynamic-form.component.html',
  styleUrls: ['./edit-dynamic-form.component.scss']
})
export class EditDynamicFormComponent implements OnInit {

  selectedFieldType: typeof DynamicFormModel;
  fieldTypes: Array<typeof DynamicFormModel> = [
    Fields.DynamicFormInputModel,
    Fields.DynamicFormTextAreaModel,
    Fields.DynamicFormMultiRowModel,
    Fields.DynamicFormMonthRangeModel,
    Fields.DynamicFormSelectModel
  ];

  @Input() dynamicFormConfig = [];

  constructor(private dynamicFormService: DynamicFormService) { }

  ngOnInit() {
  }

  onAddFieldClicked(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (this.selectedFieldType && this.selectedFieldType.Type) {
      this.dynamicFormConfig.push(new this.selectedFieldType());
    }

  }

  onAddValidationClicked(field: DynamicFormModel, evt: MouseEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    if ((<any>field)._newValidationType) {
      var copyOfValidationType: any = JSON.parse(JSON.stringify((<any>field)._newValidationType));
      field.validations.push(copyOfValidationType);
    }

  }

  onRemoveFieldClick(field, $event) {
    var index = this.dynamicFormConfig.indexOf(field);
    this.dynamicFormConfig.splice(index, 1);
  }

  onRemoveValidationClick(field: DynamicFormModel, validation, evt: MouseEvent) {
    field.validations = field.validations.filter(fieldValidation => {
      return (<any>fieldValidation).key !== validation.key;
    });
  }
}
