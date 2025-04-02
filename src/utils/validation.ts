export function validateOnChange(field: FormFieldProps, onChange: (field: FormFieldProps) => void): boolean {
  //Validate
  const validatedField = validateInputField(field)
  if (validatedField.isValid) {
    onChange({ ...field, error: '' })
    return true
  } else {
    onChange({ ...field, error: validatedField.error })
    return false
  }
}

export const validateInputField = (field: FormFieldProps): FormFieldValidatedResultProps => {
  const noErrors = { isValid: true, error: '' }
  //Check If Required
  if (field.validate.required) {
    const isInvalid = {
      isValid: false,
      error: 'This field is required!',
    }
    if (field.value === null || field.value === '') {
      return isInvalid
    }
  }

  return noErrors
}
