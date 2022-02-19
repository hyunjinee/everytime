import React from 'react';

import logo from '@assets/nav.logo.png';
import { Container, Logo, Name, SubName, Title, LogoLink } from './style';

const BoardLeftHeader = () => {
  return (
    <Container>
      <LogoLink to={'/'}>
        <Logo src={logo} alt="logo" />
      </LogoLink>

      <Title>
        <Name text="에브리타임" />
        <SubName text="충남대" />
      </Title>
    </Container>
  );
};

export default BoardLeftHeader;
