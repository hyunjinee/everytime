import React from 'react';
import { Container } from './style';

type optionType = {
  id: string;
  value: string;
};

export interface Props {
  optionList: optionType[];
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: any;
}

const Select = ({
  optionList,
  className,
  onChange,
  value,
}: Props): JSX.Element => {
  const options = optionList.map((option) => (
    <option key={option.id}>{option.value}</option>
  ));
  return (
    <Container className={className} onChange={onChange} value={value}>
      {options}
    </Container>
  );
};

export default Select;
