type FormFieldValueProps = string | number | boolean | File | File[] | null | Array<string>

type ValidateProps = {
  noValidate?: boolean
  required?: boolean
  minStrLength?: number
  maxStrLength?: number
  type?: 'number' | 'text' | 'email' | 'password'
  minImages?: number
  maxImages?: number
  isImagesList?: boolean
  fileSize?: number
  dateTimePicker?: boolean
  dateTimeRangePicker?: boolean
  email?: boolean
  phone?: boolean
  integer?: boolean
  isYoutubeUrl?: boolean
}

type FormFieldProps = {
  value: FormFieldValueProps
  name: string
  formName: string
  error: string
  section: number
  validate: ValidateProps
}
type FormProps = {
  fields: {
    [key: string]: FormFieldProps
  }
  currentSection: number
  errorMsg: string
}

type InputFieldProps = 'text' | 'number' | 'password' | 'search'
type FormFieldValidatedResultProps = {
  isValid: boolean
  error: string
}
