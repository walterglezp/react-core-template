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
  const { value, validate } = field
  const { required, minStrLength, maxStrLength, email, phone, integer, isYoutubeUrl } = validate
  const strValue = typeof value === 'string' ? value.trim() : ''

  // ✅ Required
  if (required && (value === null || value === '')) {
    return { isValid: false, error: 'This field is required!' }
  }

  // ✅ Min String Length
  if (minStrLength && typeof value === 'string' && strValue.length < minStrLength) {
    return {
      isValid: false,
      error: `Minimum length is ${minStrLength} characters.`,
    }
  }

  // ✅ Max String Length
  if (maxStrLength && typeof value === 'string' && strValue.length > maxStrLength) {
    return {
      isValid: false,
      error: `Maximum length is ${maxStrLength} characters.`,
    }
  }

  // ✅ Email
  if (email && typeof value === 'string') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(strValue)) {
      return {
        isValid: false,
        error: 'Please enter a valid email address.',
      }
    }
  }

  // ✅ Phone number (basic)
  if (phone && typeof value === 'string') {
    const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/
    if (!phoneRegex.test(strValue)) {
      return {
        isValid: false,
        error: 'Please enter a valid phone number.',
      }
    }
  }

  // ✅ Integer
  if (integer && (isNaN(Number(value)) || !Number.isInteger(Number(value)))) {
    return {
      isValid: false,
      error: 'Only whole numbers are allowed.',
    }
  }

  // ✅ YouTube URL
  if (isYoutubeUrl && typeof value === 'string') {
    const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/
    if (!youtubeRegex.test(strValue)) {
      return {
        isValid: false,
        error: 'Please enter a valid YouTube URL.',
      }
    }
  }

  return { isValid: true, error: '' }
}
