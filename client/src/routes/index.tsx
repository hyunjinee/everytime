import React from 'react';
import { Routes, Route } from 'react-router-dom';
import type { ReactElement } from 'react';
import Login from '../components/pages/Login';

const Router = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<div>Hello</div>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
