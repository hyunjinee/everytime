import React from 'react';
import { Container } from './style';

export interface Props {
  src: any;
  className?: string;
  onClick?: any;
}

const Img = ({ src, className, onClick }: Props): JSX.Element => {
  return <Container src={src} className={className} onClick={onClick} />;
};

export default Img;
