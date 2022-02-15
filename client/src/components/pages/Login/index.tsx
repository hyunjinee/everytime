import React, { useEffect } from 'react';

import { Layout, Logo } from './style';
import Footer from '@molecules/Footer';
import LoginContent from '@organisms/LoginContent';

const Login = () => {
  useEffect(() => {
    if (window.localStorage) localStorage.clear();
  }, []);

  return (
    <Layout>
      <Logo />
      <LoginContent />
      <Footer />
    </Layout>
  );
};

export default Login;
