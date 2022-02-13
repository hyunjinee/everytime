import React from 'react';

import Input from '@atoms/Input';
import { Container, Id, Layout, LoginButton, Logo, Password } from './style';
import useForm from '@hooks/useForm';
import Footer from '@molecules/Footer';
import LoginContent from '@organisms/LoginContent';

const Login = () => {
  if (window.sessionStorage) window.sessionStorage.clear();

  return (
    <Layout>
      <Logo />
      <LoginContent />
      <Footer />
    </Layout>
  );
};

export default Login;

// const StyledInput = styled.input`
//   width: 100%;
// 	height: 40px;
// 	line-height: 28px;
// 	margin-bottom: 5px;
// 	padding: 5px 10px;
// 	border: 1px solid #d6d6d6;
// 	color: #292929;
// 	font-size: 16px;
// 	background-color: #fff;
// 	outline: none;
// `
