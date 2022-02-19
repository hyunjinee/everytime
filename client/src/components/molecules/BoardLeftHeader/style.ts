import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Span from '@atoms/Span';

export const Container = styled.div`
  float: left;
  margin-left: 24px;
  height: 100%;
`;
export const LogoLink = styled(Link)`
  width: 40px;
  height: 40px;
  float: left;
  display: block;
  margin: 20px 16px 20px 0px;
`;
export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
export const Title = styled.p`
  float: left;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
export const Name = styled(Span)`
  display: block;
  color: #c62917;
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
  margin-left: 3px;
  margin-top: 5px;
`;
export const SubName = styled(Span)`
  display: block;
  line-height: 25px;
  color: #292929;
  font-size: 22px;
`;
