import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Test = (): JSX.Element => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state);
  // useEffect(() => {
  //   // const response = axios.get('http://localhost:3001/api/user/test');
  //   connectionTest();
  //   // console.log('first');
  //   // dispatch(fetchUsers());
  //   // console.log(users);

  //   // connectionTest();
  // }, [dispatch, users]);
  console.log(users);
  return (
    <>
      <div>this is just testing page</div>
    </>
  );
};

export default Test;
