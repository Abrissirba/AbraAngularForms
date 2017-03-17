import { Validation } from './validation';

export interface IDynamicFormModel {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  id?: any;
  value?: any;
  validations?: Array<Validation>;
  settings?: any;
  sortOrder?: number;
}