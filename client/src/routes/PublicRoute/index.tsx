import React from 'react';
import { Navigate, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';

interface Props {
  children: JSX.Element;
}

const PublicRoute = ({ children }: Props): JSX.Element => {
  const { user } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  return user ? (
    <Navigate replace to="/board" state={{ from: location }} />
  ) : (
    children
  );
};
export default PublicRoute;
