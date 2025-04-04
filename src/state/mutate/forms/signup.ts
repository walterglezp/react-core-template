export interface SignupFormProps extends FormProps {
  fields: {
    userName: FormFieldProps
    password: FormFieldProps
    confirmPassword: FormFieldProps
    acceptTerms: FormFieldProps
  }
}

export const defaultSignupFormState: SignupFormProps = {
  fields: {
    userName: {
      formName: 'signup',
      name: 'userName',
      value: '',
      error: '',
      section: 1,
      validate: { required: true, maxStrLength: 26 },
    },
    password: {
      formName: 'signup',
      name: 'password',
      value: '',
      error: '',
      section: 1,
      validate: { required: true, maxStrLength: 15 },
    },
    confirmPassword: {
      formName: 'signup',
      name: 'confirmPassword',
      value: '',
      error: '',
      section: 1,
      validate: { required: true, maxStrLength: 15 },
    },
    acceptTerms: {
      formName: 'signup',
      name: 'acceptTerms',
      value: false,
      error: '',
      section: 1,
      validate: {},
    },
  },
  currentSection: 1,
  errorMsg: '',
}
