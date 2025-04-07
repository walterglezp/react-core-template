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

  // Required
  if (field.validate.required) {
    if (field.value === null || field.value === '') {
      return { isValid: false, error: 'This field is required!' }
    }
  }

  // Email format
  if (field.validate.email && typeof field.value === 'string') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(field.value)) {
      return { isValid: false, error: 'Please enter a valid email address.' }
    }
  }

  return noErrors
}
