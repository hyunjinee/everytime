import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '@styles/global';
import RegisterInputContainer from '.';

export default {
  title: 'Molecules/RegisterInputContainer',
  component: RegisterInputContainer,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <RegisterInputContainer labelTitle="안녕">
      <TestInput />
    </RegisterInputContainer>
  </>
);

const TestInput = styled.input`
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
