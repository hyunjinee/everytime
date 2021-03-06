import styled from 'styled-components';

import Label from '@atoms/Label';
import Select from '@atoms/Select';
import dropdown from '@assets/register.input.select.png';
import search from '@assets/register.input.search.png';
import Button from '@atoms/Button';

export const Container = styled.div`
  width: 480px;
  margin: 24px auto;
  padding: 24px;
  border: 1px solid #ededed;
  border-radius: 12px;
`;

export const YearContainer = styled.div`
  margin-top: 24px;
  & > div {
    padding: 0 8px;
  }
  & > div > label {
    color: #737373;

    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
  }
`;

export const SchoolContainer = styled.div`
  margin-top: 24px;
  & > div {
    padding: 0 8px;
  }
  & > div > label {
    color: #737373;

    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
  }
`;

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
export const SchoolSelect = styled(Select)`
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

export const SchoolInput = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 4px;
  padding: 8px;

  font-size: 16px;
  border: 1px solid #ededed;
  border-radius: 12px;

  color: #292929;
  background-image: url('${search}');
  background-color: #f9f9f9;
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 24px 24px;
`;

export const IdContainer = styled.div`
  margin-top: 24px;
  & > div {
    padding: 0 8px;
  }
  & > div > label {
    color: #737373;

    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
  }
`;

export const PasswordContainer = styled.div`
  margin-top: 24px;
  & > div {
    padding: 0 8px;
  }
  & > div > label {
    color: #737373;

    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
  }
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
  /* background-image: url('${search}');
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 24px 24px; */
`;
export const PasswordInput = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 4px;
  padding: 8px;

  font-size: 16px;
  border: 1px solid #ededed;
  border-radius: 12px;

  color: #292929;
  background-color: #f9f9f9;
  /* background-image: url('${search}');
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 24px 24px; */
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
