import React, { useState, useCallback } from 'react';

const useInputs = (initialData) => {
  const [data, setData] = useState(initialData);

  const onChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // const clear = () => setData(initialData);

  const reset = useCallback(() => {
    setData(initialData);
  }, [initialData]);
  return [data, onChange, reset];
};

export default useInputs;
