import React from 'react';

import Select from '.';

export default {
  title: 'Atoms/Select',
  component: Select,
};

const optionList = [
  { id: '1', value: '개발' },
  { id: '2', value: '디자인' },
  { id: '3', value: '기획' },
];

export const Default = () => <Select optionList={optionList} />;
