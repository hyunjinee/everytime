import styled from 'styled-components';

import hashtag from '@assets/hashtag.png';
import attach from '@assets/attach.png';
import pencil from '@assets/pencil.png';

export const Container = styled.section`
  position: relative;
  margin-botoom: 5px;
  border: 2px solid #d6d6d6;

  @media only screen and (max-width: 640px) {
    margin: 0 5px 5px 5px;
    width: auto;
  }
  @media only screen and (min-width: 641px) {
    position: relative;
    /* left: 25px; */
    margin-top: 25px;
    /* width: 780px; */
    width: 100%;
  }
`;

export const Form = styled.form``;

export const TitleContainer = styled.p`
  padding: 15px;
  border-bottom: 1px solid #e3e3e3;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 20px;
  line-height: 20px;
  border: 0;
  color: #292929;
  font-weight: bold;
  font-size: 16px;
`;

export const ContentContainer = styled.p`
  padding: 15px;
  border-bottom: 1px solid #e3e3e3;
`;

export const Content = styled.textarea`
  width: 100%;
  height: 350px;
  border: 0;
  color: #292929;
  font-size: 14px;
  resize: none;
`;

export const OptionContainer = styled.ul``;

export const HashTag = styled.li`
  display: inline-block;
  background-image: url(${hashtag});
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 40px 40px;
  cursor: pointer;
`;

export const Attach = styled.li`
  display: inline-block;
  background-image: url(${attach});
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 40px 40px;
  cursor: pointer;
`;

export const Submit = styled.li`
  float: right;
  width: 40px;
  height: 40px;
  background-image: url(${pencil});
  background-color: #c62917;
  background-repeat: no-repeat;
  background-positon: center center;
  background-size: 40px 40px;
`;

export const Anonym = styled.li``;
