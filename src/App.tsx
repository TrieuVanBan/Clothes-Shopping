import React, { useState } from 'react'
import AppRoute from './routes/AppRoute'
import 'react-toastify/dist/ReactToastify.css';
import "./index.css"
import { store } from './app/store'
import { Provider } from 'react-redux'


function App() {
  return (
    <>
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </>
  )
}

export default App
