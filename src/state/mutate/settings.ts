import { produce } from 'immer'
import { AppStateProps } from '@app/state'

export class MutateSettings {
  private state: AppStateProps
  private mutateState: (newState: AppStateProps) => AppStateProps

  constructor(state: AppStateProps, mutate: (newState: AppStateProps) => AppStateProps) {
    this.mutateState = mutate
    this.state = state
  }

  public setLanguage(newLanguage: AppLanguage): void {
    const nextState = produce(this.state, (draft) => {
      draft.setting.language = newLanguage
    })
    this.mutateState(nextState)
  }
}
