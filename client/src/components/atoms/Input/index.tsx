import React, {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
} from 'react';

import { Container } from './style';

interface Props {
  type?: HTMLInputTypeAttribute;
  width?: number;
  height?: number;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  name?: string;
  handleEnter?: Function;
  handleChange?: ChangeEventHandler;
  handleKeyDown?: KeyboardEventHandler;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, ...props }: Props) => {
  return <Container type={type} {...props}></Container>;
};

export default Input;
