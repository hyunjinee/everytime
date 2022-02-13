import React from 'react';
import Img from '.';
import logo from '../../../assets/index.login.logo.big.png';

export default {
  title: 'Atoms/Img',
  component: Img,
};

export const TestImg = () => <Img src="https://picsum.photos/200/300" />;
export const EveryTime = () => <Img src={logo} />;
