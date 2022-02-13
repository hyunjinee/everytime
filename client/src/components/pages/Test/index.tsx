import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { fetchUsers } from '@store/user/action';

const Test = (): JSX.Element => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state);
  useEffect(() => {
    console.log('first');
    dispatch(fetchUsers());
    console.log(users);

    connectionTest();
  }, []);

  const connectionTest = async () => {
    const response = await axios.get('http://localhost:3001/api');
    console.log(response.data);
  };

  console.log(users);
  return <div>Test</div>;
};

export default Test;
