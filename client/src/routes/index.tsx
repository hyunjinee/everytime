import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '@pages/Login';
import Test from '@pages/Test';
import Register from '@pages/Register';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<div>Hello</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default Router;
