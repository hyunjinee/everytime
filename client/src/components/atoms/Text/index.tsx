import React from 'react';

import { Container } from './style';

interface Props {
  text?: string;
  className?: string;
  children?: any;
}

const Text = ({ text, className, children }: Props): JSX.Element => {
  return <Container>{children}</Container>;
};

export default Text;
