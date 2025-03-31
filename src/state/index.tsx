import React, { FC, ReactNode, createContext, useState } from 'react'

import { initialAppState, AppStateProps } from '@app/state/state'

export type AppContextType = {
  globalState: AppStateProps
  updateGlobalState(newState: AppStateProps): AppStateProps
}

const initialAppContext: AppContextType = {
  globalState: initialAppState,
  updateGlobalState: () => initialAppState,
}

export const AppContext = createContext<AppContextType>(initialAppContext)

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [globalState, setGlobalState] = useState<AppStateProps>(initialAppState)

  const updateGlobalState = (partial: Partial<AppStateProps>): AppStateProps => {
    const nextState = { ...globalState, ...partial }
    setGlobalState(nextState)
    return nextState
  }

  return <AppContext.Provider value={{ globalState, updateGlobalState }}>{children}</AppContext.Provider>
}

export const useAppContext = () => React.useContext(AppContext)

export default AppProvider

export * from '@app/state/state'
