import React from 'react';

import { Container, RegisterLabel } from './style';
interface Props {
  children: JSX.Element;
  labelTitle: string;
}

const RegisterInputContainer = ({
  children,
  labelTitle,
}: Props): JSX.Element => {
  return (
    <Container>
      <div>
        <RegisterLabel>{labelTitle}</RegisterLabel>
      </div>
      {children}
    </Container>
  );
};

export default RegisterInputContainer;
