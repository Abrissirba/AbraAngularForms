import { Validator, ValidatorFn } from '@angular/forms'

export class Validation {
    public key: string;
    public value?: any;
    public title?: string;
    public inputType?: string; 
    public instance?: Array<Validator>; 
    public factory?: (value) => ValidatorFn;
}