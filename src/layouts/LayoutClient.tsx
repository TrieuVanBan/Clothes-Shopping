import React from 'react'
import HeaderPage from '../pages/client/HeaderPage'
import { Outlet } from 'react-router-dom'
import FooterPage from '../pages/client/FooterPage'

function LayoutClient() {
  return (
    <>
      <HeaderPage />
      <main>
        <Outlet />
      </main>
      <FooterPage />
    </>
  )
}

export default LayoutClient
