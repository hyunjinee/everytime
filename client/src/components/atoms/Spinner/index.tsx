import React from 'react';
import { LoadingSpinner, LoadingSpinnerContainer } from './style';

const Spinner = (): JSX.Element => {
  return (
    <LoadingSpinnerContainer>
      <LoadingSpinner />
    </LoadingSpinnerContainer>
  );
};

export default Spinner;
