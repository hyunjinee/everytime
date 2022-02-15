import React from 'react';
import type { ReactElement } from 'react';
import type { RouteProps } from 'react-router-dom';
import { Navigate, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';

const PublicRoute = ({ children }: RouteProps): ReactElement => {
  const { user } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  // const isAuthorized = true;
  return user ? (
    <Navigate replace to="/board" state={{ from: location }} />
  ) : (
    <Routes>{children}</Routes>
  );
};
export default PublicRoute;
