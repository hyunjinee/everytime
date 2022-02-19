import styled from 'styled-components';

import my from '@assets/my.png';
import chat from '@assets/chat.png';

export const Container = styled.div`
  float: right;
  margin-right: 24px;
  height: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
`;

export const Chat = styled.div`
  background-image: url(${chat});
  background-size: 24px 24px;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #d6d6d6;
  border-radius: 12px;
`;

export const MyPage = styled(Chat)`
  background-image: url(${my});
`;
