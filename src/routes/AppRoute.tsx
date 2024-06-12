import React from 'react'
import '../index.css';
import { Route, Routes, Switch } from "react-router-dom";
import LayoutClient from '../layouts/LayoutClient';
import HomePage from '../pages/client/HomePage';
import DetailPage from '../pages/client/DetailPage';
import CartPage from '../pages/client/CartPage';
import LoginPage from '../pages/client/LoginPage';
import RegisterPage from '../pages/client/RegisterPage';
import FavoritePage from '../pages/client/FavoritePage';
import PayPage from '../pages/client/PayPage';
import ScrollToTop from '../components/ScrollTop';

const AppRoute = () => {
  return (
    <div className='app'>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LayoutClient />}>
          <Route index element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/pay" element={<PayPage />} />
        </Route>
      </Routes >
    </div>
  )
}

export default AppRoute;