import React from 'react';

import { Container } from './style';

interface Props {
  text: string;
  className?: string;
}

const Span = ({ text, className }: Props): JSX.Element => {
  return <Container className={className}>{text}</Container>;
};

Span.defaultProps = {
  className: '',
};

export default Span;
