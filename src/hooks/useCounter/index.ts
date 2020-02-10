import { useState } from 'react';

type Index = {
  counter: number;
  increase: () => void;
  decrease: () => void;
};

export const useCounter = (): Index => {
  const [counter, setCounter] = useState(0);

  const increase = (): void => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrease = (): void => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return {
    counter,
    increase,
    decrease,
  };
};
