import React from 'react';

import { Layout, Logo } from './style';
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
