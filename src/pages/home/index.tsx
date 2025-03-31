import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@app/router/routes'

import './index.scss'

const HomePage: FC = () => {
  return (
    <div id="home-page" className="h-100">
      <h1>Hello world</h1>
    </div>
  )
}

export default HomePage
