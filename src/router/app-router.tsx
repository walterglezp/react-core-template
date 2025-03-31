import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorBoundary from '@components/common/ErrorBoundary'
import { ROUTES } from './routes'

const HomePage = lazy(() => import('@pages/home'))
const NotFoundPage = lazy(() => import('@pages/not-found'))

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<div>Something went wrong while loading the page.</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={ROUTES.root} element={<HomePage />} />
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export { AppRouter }
