import * as Components from './components';
import * as Models from './models';

export { DynamicFormValidatorKeys } from './utils/validators.utils';

export const DynamicFormComponents = {
  input: Components.FormInputComponent,
  select: Components.FormSelectComponent,
  multirow: Components.FormMultiRowComponent,
  monthRange: Components.FormMonthRangeComponent,
  textarea: Components.FormTextareaComponent,
}

export const DynamicFormModels = {
  input: Models.DynamicFormInputModel,
  select: Models.DynamicFormSelectModel,
  multirow: Models.DynamicFormMultiRowModel,
  monthRange: Models.DynamicFormMonthRangeModel,
  textarea: Models.DynamicFormTextAreaModel,
}