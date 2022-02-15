import React from 'react';
import type { ReactElement } from 'react';
import type { RouteProps } from 'react-router-dom';
import { Navigate, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';

const PrivateRoute = ({ children }: RouteProps): ReactElement => {
  const { user } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  // const isAuthorized = true;
  return user ? (
    <Routes>{children}</Routes>
  ) : (
    <Navigate replace to="/login" state={{ from: location }} />
  );
};
export default PrivateRoute;
