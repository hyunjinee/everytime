import React from 'react';

import { Container } from './style';

export interface Props {
  onClick?: any;
  children: any;
  className?: string;
}

const Button = ({ onClick, children, className }: Props): JSX.Element => {
  return (
    <Container onClick={onClick} className={className}>
      {children}
    </Container>
  );
};

export default Button;
