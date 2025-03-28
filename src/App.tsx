import React from 'react'

import './app.scss'

const App: React.FC = () => {
  console.log('Hello world', window.REACT_API_GATEWAY_URL)

  return (
    <div id="app-container" className="h-100">
      <h1>Hello world</h1>
    </div>
  )
}

export default App
