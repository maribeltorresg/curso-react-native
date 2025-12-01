import { useState } from "react";

export const UseCounter = () => {

  // Hook UseStade
  const [count, setCount] = useState<number>(10);
  const increaseBy = (value: number) => {
    // setCount(value + count);
    // setCount((current) => current + value);
    // Si llega a 0 no hacer mas
    setCount(Math.max(value + count, 0));
  };

  return {
    // Properties
    count,

    // Actions
    increaseBy,
  };
};
