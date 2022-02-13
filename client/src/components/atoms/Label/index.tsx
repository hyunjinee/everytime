import React from 'react';
import { Container } from './style';

interface Props {
  children: JSX.Element;
}

const Label = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Label;
