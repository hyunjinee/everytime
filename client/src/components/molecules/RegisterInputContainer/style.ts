import styled from 'styled-components';

import Label from '@atoms/Label';

export const Container = styled.div`
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

export const RegisterLabel = styled(Label)``;

// export const EntranceYearLabel = styled(Label)`
//   color: #737373;
//   color: red;
//   font-weight: bold;
//   font-size: 12px;
// `;

// export const SchoolLabel = styled(Label)``;
// export const IdLabel = styled(Label)``;
// export const PasswordLabel = styled(Label)``;
