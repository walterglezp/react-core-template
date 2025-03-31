import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '@pages/home'
import { ROUTES } from '@app/router/routes'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Defaults */}
        <Route path="/" element={<HomePage />} />
        <Route path={ROUTES.home} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export { AppRouter }
