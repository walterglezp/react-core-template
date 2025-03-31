import React from 'react'
import { AppRouter } from '@app/router/app-router'
import './app.scss'

const App: React.FC = () => {
  console.log('Hello world', window.REACT_API_GATEWAY_URL)

  return (
    <div id="app-container" className="h-100">
      <AppRouter />
    </div>
  )
}

export default App
