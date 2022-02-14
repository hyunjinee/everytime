import React from 'react';
import { Header, Description, Strong, Introduce } from './style';
const RegisterIntroduce = () => {
  return (
    <>
      <Header>에브리타임 회원가입</Header>
      <Description>
        에브리타임 계정으로 <Strong>캠퍼스픽, 에브리타임</Strong> 등 <br />{' '}
        다양한 대학생 서비스를 모두 이용하실 수 있습니다.{' '}
      </Description>
      <Introduce>⭐️ 모두 입력해주세요 ⭐️</Introduce>
    </>
  );
};

export default RegisterIntroduce;
