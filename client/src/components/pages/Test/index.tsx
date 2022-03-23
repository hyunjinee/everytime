import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Test = (): JSX.Element => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state);
  useEffect(() => {
    // const response = axios.get('http://localhost:3001/api/user/test');
    connectionTest();
    // console.log('first');
    // dispatch(fetchUsers());
    // console.log(users);

    // connectionTest();
  }, [dispatch, users]);

  const connectionTest = async () => {
    const response = await axios.get('/api/user/test');
    console.log('실행');
    console.log(response.data);
  };

  const connectionTest2 = async () => {
    const response = await axios.get('http://localhost:3001/api/user/test');
    console.log(response.data);
  };

  console.log(users);
  return (
    <>
      <div>this is just testing page</div>
      <button onClick={connectionTest}>hi</button>
    </>
  );
};

export default Test;
