import styled from 'styled-components';

import pencil from '@assets/container.write.background.png';

interface Props {
  writeMode?: boolean;
}

export const Container = styled.div`
  @media only screen and (max-width: 640px) {
    padding: 0 0 10px 0;
  }
  @media only screen and (min-width: 641px) {
    position: relative;
    margin: 0 auto 25px auto;
    width: 1180px;
  } ;
`;

export const WriteButton = styled.a<Props>`
  display: ${(props) => (props.writeMode ? 'none' : 'block')};
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
  @media only screen and (max-width: 640px) {
    margin: 0 5px 5px 5px;
  }
`;
