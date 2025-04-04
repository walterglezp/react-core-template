import { produce } from 'immer'
import { AppStateProps } from '@app/state'
import { defaultLoginFormState, defaultSignupFormState } from '@app/state/mutate/forms'

export class MutateForm {
  private state: AppStateProps
  private mutateState: (newState: AppStateProps) => AppStateProps
  private formDefaults = {
    login: defaultLoginFormState,
    signup: defaultSignupFormState,
  }

  constructor(state: AppStateProps, mutate: (newState: AppStateProps) => AppStateProps) {
    this.mutateState = mutate
    this.state = state
  }

  setFieldValue = <T extends keyof AppStateProps['forms']>(field: FormFieldProps): void => {
    const nextState = produce(this.state, (draft) => {
      const formFields = draft.forms[field.formName as T].fields
      if (field.name in formFields) {
        formFields[field.name as keyof typeof formFields] = field
      }
    })

    this.mutateState(nextState)
  }

  setFieldError = <T extends keyof AppStateProps['forms']>(field: FormFieldProps, error: string): void => {
    const nextState = produce(this.state, (draft) => {
      const formFields = draft.forms[field.formName as T].fields
      if (field.name in formFields) {
        formFields[field.name as keyof typeof formFields].value = field.value
        formFields[field.name as keyof typeof formFields].error = error
      }
    })

    this.mutateState(nextState)
  }

  goToFormSection = <T extends keyof AppStateProps['forms']>(formName: string, section: number): void => {
    const nextState = produce(this.state, (draft) => {
      draft.forms[formName as T].currentSection = section
    })
    this.mutateState(nextState)
  }

  setFormError = <T extends keyof AppStateProps['forms']>(formName: string, error: string): void => {
    const nextState = produce(this.state, (draft) => {
      draft.forms[formName as T].errorMsg = error
    })
    this.mutateState(nextState)
  }

  setFormValues = <T extends keyof AppStateProps['forms']>(
    formName: T,
    formValues: AppStateProps['forms'][T]
  ): void => {
    const nextState = produce(this.state, (draft) => {
      draft.forms[formName] = formValues
    })
    this.mutateState(nextState)
  }

  resetForm = <T extends keyof AppStateProps['forms']>(formName: T): void => {
    const nextState = produce(this.state, (draft) => {
      draft.forms[formName] = this.formDefaults[formName]
    })
    this.mutateState(nextState)
  }
}

export * from '@app/state/mutate/forms/login'
export * from '@app/state/mutate/forms/signup'
