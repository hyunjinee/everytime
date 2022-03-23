import styled from 'styled-components';
import comment from '@assets/comment.png';
import vote from '@assets/vote.png';

export const Container = styled.div`
  padding: 15px;
  margin-bottom: -1px;
  border: 1px solid #e3e3e3;
  background-color: #fff;
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: normal;
  color: #292929;
  margin-bottom: 5px;
  line-height: 18px;
`;

export const Content = styled.p`
  margin-bottom: 5px;
  max-height: 30px;
  line-height: 15px;
  white-space: normal;
  overflow: hidden;
`;

export const Time = styled.time`
  float: left;
  margin-right: 5px;
`;

export const Anonymous = styled.h3`
  float: left;
`;

export const Status = styled.ul`
  float: right;
  display: flex;
`;

export const Vote = styled.li`
  margin-left: 8px;
  padding-left: 15px;
  color: #c62917;
  background-image: url(${vote});
  background-size: 11px 11px;
  background-repeat: no-repeat;
`;

export const Comment = styled.li`
  padding-left: 15px;
  margin-left: 8px;
  color: #0ca5af;
  background-image: url(${comment});
  background-size: 11px 11px;
  background-repeat: no-repeat;
  cursor: pointer;
`;
