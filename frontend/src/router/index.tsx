import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Register, Login, Dashboard } from '../pages';
import { Notifications } from '../components';

const Router = () => {
  const loggedIn = localStorage.getItem('user-logged');

  return (
    <BrowserRouter>
      <Notifications />
      <Routes>
        <Route path="/" element={<Navigate replace to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {loggedIn ? (
          <Route path="/dashboard" element={<Dashboard />} />
        ) : (
          <React.Fragment>
            <Route
              path="/dashboard"
              element={<Navigate replace to="/login" />}
            />
          </React.Fragment>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
