import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useInputs from '@hooks/useInputs';
import { yearList } from '@libs/staticData';
import {
  Container,
  Description,
  EntranceYearLabel,
  Header,
  SchoolContainer,
  SchoolLabel,
  SchoolSelect,
  Strong,
  YearContainer,
  Introduce,
  YearSelect,
  SchoolInput,
  IdContainer,
  PasswordContainer,
  IdLabel,
  PasswordLabel,
  IdInput,
  PasswordInput,
  RegisterButton,
} from './style';
import { register } from '@store/user/action';

const optionList = [
  {
    id: 'abcdek',
    value: '개발',
  },
  {
    id: 'dkwlxk',
    value: '책',
  },
  {
    id: 'ekjncn',
    value: '운동',
  },
];

const Register = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
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
    <Container>
      <Header>에브리타임 회원가입</Header>
      <Description>
        에브리타임 계정으로 <Strong>캠퍼스픽, 에브리타임</Strong> 등 <br />{' '}
        다양한 대학생 서비스를 모두 이용하실 수 있습니다.{' '}
      </Description>
      <Introduce>⭐️ 모두 입력해주세요 ⭐️</Introduce>
      <YearContainer>
        <div>
          <EntranceYearLabel>입학년도</EntranceYearLabel>
        </div>
        <YearSelect
          optionList={yearList}
          onChange={onChangeEntranceYear}
          value={entranceYear}
        />
      </YearContainer>
      <SchoolContainer>
        <div>
          <SchoolLabel>학교</SchoolLabel>
        </div>
        {/* <SchoolSelect optionList={optionList} /> */}
        <SchoolInput
          placeholder="학교 이름을 검색하세요."
          onChange={onChange}
          name="school"
          value={form.school}
        />
      </SchoolContainer>
      <IdContainer>
        <div>
          <IdLabel>아이디</IdLabel>
        </div>
        <IdInput placeholder="아이디" onChange={onChange} name="id" />
      </IdContainer>
      <PasswordContainer>
        <div>
          <PasswordLabel>비밀번호</PasswordLabel>
        </div>
        <PasswordInput
          placeholder="비밀번호"
          onChange={onChange}
          name="password"
          value={form.password}
        />
      </PasswordContainer>
      <RegisterButton onClick={handleRegister}>회원가입</RegisterButton>
    </Container>
  );
};

export default Register;
