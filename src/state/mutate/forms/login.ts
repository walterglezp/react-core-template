export interface LoginFormProps extends FormProps {
  fields: {
    userName: FormFieldProps
    password: FormFieldProps
  }
}

export const defaultLoginFormState: LoginFormProps = {
  fields: {
    userName: {
      formName: 'login',
      name: 'userName',
      value: '',
      error: '',
      section: 1,
      validate: { required: true, maxStrLength: 26 },
    },
    password: {
      formName: 'login',
      name: 'password',
      value: '',
      error: '',
      section: 1,
      validate: { required: true, maxStrLength: 15 },
    },
  },
  currentSection: 1,
  errorMsg: '',
}
