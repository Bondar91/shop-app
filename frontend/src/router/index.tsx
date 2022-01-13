import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register, Login } from '../pages';
import { Notifications } from '../components';

const Router = () => (
  <BrowserRouter>
    <Notifications />
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
