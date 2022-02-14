import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RegisterIntroduce from '@molecules/RegisterIntroduce';
import RegisterInputContainer from '@molecules/RegisterInputContainer';
import { RootState } from '@store/index';
import { register } from '@store/user/action';
import useInputs from '@hooks/useInputs';
import {
  YearSelect,
  RegisterButton,
  PasswordInput,
  IdInput,
  SchoolInput,
} from './style';
import { yearList } from '@libs/staticData';

const RegisterContent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [entranceYear, setEntranceYear] = useState('2022학번');
  const [form, onChange, reset] = useInputs({
    id: '',
    password: '',
    school: '',
  });

  const onChangeEntranceYear = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setEntranceYear(event.target.value);
    },
    []
  );

  const handleRegister = useCallback(() => {
    const userData = { ...form, entranceYear };
    dispatch(register(userData));

    // console.log(user);
  }, [dispatch, form, entranceYear]);

  console.log(user, '유저용');
  console.log(entranceYear, form);
  return (
    <>
      <RegisterIntroduce />
      <RegisterInputContainer labelTitle="입학년도">
        <YearSelect
          optionList={yearList}
          onChange={onChangeEntranceYear}
          value={entranceYear}
        />
      </RegisterInputContainer>
      <RegisterInputContainer labelTitle="학교">
        <SchoolInput
          placeholder="학교 이름을 검색하세요."
          onChange={onChange}
          name="school"
          value={form.school}
        />
      </RegisterInputContainer>
      <RegisterInputContainer labelTitle="아이디">
        <IdInput placeholder="아이디" onChange={onChange} name="id" />
      </RegisterInputContainer>
      <RegisterInputContainer labelTitle="비밀번호">
        <PasswordInput
          placeholder="비밀번호"
          onChange={onChange}
          name="password"
          value={form.password}
        />
      </RegisterInputContainer>
      <RegisterButton onClick={handleRegister}>회원가입</RegisterButton>
    </>
  );
};

export default RegisterContent;
