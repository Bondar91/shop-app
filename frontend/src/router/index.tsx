import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register, Login } from '../pages';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
