import React from 'react';
import { Container } from './style';

type optionType = {
  id: string;
  value: string;
};

export interface Props {
  optionList: optionType[];
  className?: string;
}

const Select = ({ optionList, className }: Props): JSX.Element => {
  const options = optionList.map((option) => (
    <option key={option.id}>{option.value}</option>
  ));
  return <Container className={className}>{options}</Container>;
};

export default Select;
