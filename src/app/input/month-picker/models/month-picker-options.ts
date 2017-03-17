import { MonthPickerValue } from './month-picker-value';

export class MonthPickerOptions {
    public max?: MonthPickerValue;
    public min?: MonthPickerValue;
    public disabled?: boolean;
    public placeholder?: string;
    public titleSuffix?: string;
}