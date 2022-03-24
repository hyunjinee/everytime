import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Spinner from '@atoms/Spinner';

const Login = React.lazy(
  () => import(/* webpackChunkName: "Login" */ '@pages/Login')
);
const Register = React.lazy(
  () => import(/* webpackChunkName: "Register" */ '@pages/Register')
);
const Board = React.lazy(
  () => import(/* webpackChunkName: "Board" */ '@pages/Board')
);
const Test = React.lazy(
  () => import(/* webpackChunkName: "Test" */ '@pages/Test')
);
const Detail = React.lazy(
  () => import(/* webpackChunkName: "Detail" */ '@pages/Detail')
);

const Router = (): JSX.Element => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/board"
          element={
            <PrivateRoute>
              <Board />
            </PrivateRoute>
          }
        />
        <Route path="/board/:articleNumber" element={<Detail />} />
        <Route path="/boardtest" element={<Board />} />
        <Route path="/test" element={<Detail />} />
        <Route path="*" element={<Board />} />
      </Routes>
    </React.Suspense>
  );
};

export default Router;
