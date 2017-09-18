# Validations

These are split into two separate types of validations

## Component/Type Validations

Each component has a default set of validations which automatically get validated, things like
number fields and date fields being the correct values. There are also some optional validations that
can be toggled on in the creator, like "required" or "between".

These validate the value of a field and nothing else. This happens before comparisons (see below)

### Current Component/Type Validatoins

* required
* number
* email
* date

### Planned

* min/max length
* min/max selected checkboxes
* float/decimal
* between - answer is between numberLow and numberHigh (0 to 100)
* url

## Comparisons

These compare two fields to each other to handle more complicated logic, things like "this field is required if that other field is equal to 7".

This happens after a component/type validation, so we can ensure that the value is correct before the comparison takes place.

### Current comparisons

* sameAs - this field is the same as the other
* requiredIf - this field is mandatory, if specified field has a value
* requiredUnless - this field is mandatory, unless specified field has a value
