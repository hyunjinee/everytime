import React from 'react';
import type { RouteProps } from 'react-router-dom';
import { Navigate, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';

interface Props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Props): JSX.Element => {
  const { user } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  return user ? (
    children
  ) : (
    <Navigate replace to="/login" state={{ from: location }} />
  );
};
export default PrivateRoute;
