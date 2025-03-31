import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@app/router/routes'
import { useAppContext } from '@app/state'
import { MutateSettings } from '@app/state/mutate/settings'

import './index.scss'

const HomePage: FC = () => {
  const { globalState, updateGlobalState } = useAppContext()

  const mutateSettings = new MutateSettings(globalState, updateGlobalState)
  const { language } = globalState.setting

  const changeLanguage = (): void => {
    if (language === 'es') {
      mutateSettings.setLanguage('en')
    } else {
      mutateSettings.setLanguage('es')
    }
  }

  return (
    <div id="home-page" className="h-100">
      <h1>Hello world</h1>
      Current Language {language}
      <button type="button" onClick={changeLanguage}>
        Change Language
      </button>
    </div>
  )
}

export default HomePage
