import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '@pages/home'
import NotFoundPage from '@pages/not-found'
import { ROUTES } from '@app/router/routes'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Defaults */}
        <Route path="/" element={<HomePage />} />
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export { AppRouter }
