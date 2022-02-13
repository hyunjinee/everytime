import styled from 'styled-components';

import logo from '@assets/index.login.logo.png';
import Input from '@atoms/Input';
import Button from '@atoms/Button';

export const Layout = styled.div`
  height: 100vh;
  width: 100vw;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
`;

export const Container = styled.div`
  width: 360px;
  height: 280px;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.h1`
  height: 60px;
  width: 360px;
  background: transparent url(${logo}) no-repeat;
  margin: 0px 0px 15px;
`;

export const Id = styled(Input)`
  background: transparent;
  height: 40px;
  line-height: 28px;
  margin-bottom: 5px;
  padding: 5px 10px;
  font-size: 16px;

  border: 1px solid #d6d6d6;
  color: #292929;
`;

export const LoginButton = styled(Button)`
  height: 40px;
  line-height: 40px;
  margin-bottom: 15px;
  font-size: 16px;

  color: #fff;
  background: #c62917;
`;

export const Password = styled(Id)``;
