import styled from 'styled-components';

import Select from '@atoms/Select';
import Button from '@atoms/Button';
import dropdown from '@assets/register.input.select.png';
import search from '@assets/register.input.search.png';

export const YearSelect = styled(Select)`
  width: 100%;
  height: 40px;
  margin-top: 4px;
  padding: 8px;

  font-size: 16px;
  border: 1px solid #ededed;
  border-radius: 12px;

  color: #292929;
  background-image: url('${dropdown}');
  background-color: #f9f9f9;
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 24px 24px;
`;

export const RegisterButton = styled(Button)`
  margin-top: 24px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  border: 0;
  border-radius: 12px;
  background-color: #c62917;
`;

export const IdInput = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 4px;
  padding: 8px;

  font-size: 16px;
  border: 1px solid #ededed;
  border-radius: 12px;

  color: #292929;
  background-color: #f9f9f9;
`;

export const NickNameInput = styled(IdInput)``;
export const PasswordInput = styled(IdInput)``;
export const SchoolInput = styled(IdInput)`
  background-image: url('${search}');
  background-color: #f9f9f9;
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 24px 24px;
`;
