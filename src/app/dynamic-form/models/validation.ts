import { Validator, ValidatorFn, FormControl } from '@angular/forms'
import { DynamicFormModel } from './fields/dynamic-form';

export class Validation {
    public key: string;
    public value?: any;
    public title?: string;
    public inputType?: string; 
    public instance?: Array<Validator>; 
    public factory?: (value) => ValidatorFn;
    public errorMessage?: (config: DynamicFormModel, formControl: FormControl) => string;
}