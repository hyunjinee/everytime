import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useInputs from '@hooks/useInputs';
import { Container, Id, Password, LoginButton } from './style';

const initialData = {
  id: '',
  password: '',
};

const LoginContent = (): JSX.Element => {
  const navigate = useNavigate();
  const [{ id, password }, onChange] = useInputs(initialData);
  const handleLogin = () => {};
  return (
    <Container>
      <Id
        type="text"
        name="id"
        placeholder="아이디"
        value={id}
        onChange={onChange}
      />
      <Password
        type="password"
        name="password"
        placeholder="비밀번호"
        value={password}
        onChange={onChange}
      />
      <LoginButton onClick={handleLogin}>로그인</LoginButton>
    </Container>
  );
};

export default LoginContent;
