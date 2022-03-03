import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #d6d6d6;
  padding: 15px;
  margin-top: 25px;
  margin-bottom: 5px;
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

export const Name = styled.h1`
  display: block;
  font-weight: bold;
  font-size: 22px;
  > a {
    color: #292929;
  }
`;
