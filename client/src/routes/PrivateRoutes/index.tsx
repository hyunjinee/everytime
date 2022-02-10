import React from 'react';
import { Navigate, Routes } from 'react-router-dom';
import type { ReactElement } from 'react';
import type { RouteProps } from 'react-router-dom';

const PrivateRoute = ({ children }: RouteProps): ReactElement => {
  const isAuthorized = true;
  return isAuthorized ? (
    <Routes>{children}</Routes>
  ) : (
    <Navigate replace to="/login" />
  );
};
export default PrivateRoute;
