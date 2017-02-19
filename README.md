# AbraAngularForms

A repository that contains custom form elements for Angular that I have built built in different projects. It also contains a dynamic forms module that can be used as a start when you need to build a dynamic form.

## Components
The following components exists at the moment. Each component has its own module and can be used separatly. If you wish to use all the component you can use the AbraInputModule.

### abra-date-picker
A wrapper of the datepicker pikaday, https://github.com/dbushell/Pikaday, for Angular.

### abra-date-range-picker
A date range picker that use the abra-input-date component.

#### Validators

##### abra-date-range-picker-min-length
Validates min length of the selected range for the abra-date-range-picker. Currently only supports months.

##### abra-date-range-picker-max-length
Validates max length of the selected range for the abra-date-range-picker. Currently only supports months.

### abra-multi-row
A component that lets the user add and/or remove multiple rows of input. Each row consists of an input element. The compnent can for example be used to implement a grossary list.

## Dynamic form
