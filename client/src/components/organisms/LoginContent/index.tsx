import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useInputs from '@hooks/useInputs';
import { RootState } from '@store/index';
import { toast } from 'react-toastify';
import { Container, Id, Password, LoginButton } from './style';
import { login } from '@store/auth/action';

const initialData = {
  id: '',
  password: '',
};
/**
 * TODO
 *
 */
const LoginContent = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { user } = useSelector((state: RootState) => state.auth);
  const [{ id, password }, onChange] = useInputs(initialData);
  const handleLogin = () => {
    if (id.length < 8 || password.length < 1) {
      toast('아이디 비밀번호를 다시 입력해주세요.');
      return;
    }
    const userData = { id, password };
    dispatch(login(userData));
  };
  useEffect(() => {}, [navigate]);

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
