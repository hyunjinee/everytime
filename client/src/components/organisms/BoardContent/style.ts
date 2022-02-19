import styled from 'styled-components';

import pencil from '@assets/container.write.background.png';

export const Container = styled.div`
  width: 1180px;
  margin: 0 auto 25px auto;
`;

export const WriteButton = styled.a`
  display: block;
  margin-bottom: 5px;
  padding: 0 10px;
  height: 50px;
  line-height: 46px;
  border: 2px solid #d6d6d6;
  cursor: text;
  font-size: 14px;
  color: #a6a6a6;
  background: #f9f9f9 url(${pencil}) no-repeat right center;
  background-size: 40px 40px;
`;
