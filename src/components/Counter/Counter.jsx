import { useState } from "react";
import { Button } from "./Counter.styled";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) {
      return null;
    }
    setCount(count - 1);
  };

  return (
    <div>
      <p>{count}</p>
      {/* <Button type="button" onClick={increment}>
        +
      </Button>
      <Button type="button" onClick={decrement}>
        -
      </Button> */}
      <button type="button" onClick={increment}>
        <AiFillCaretUp />
      </button>
      <button type="button" onClick={decrement}>
        <AiFillCaretDown />
      </button>
    </div>
  );
};
