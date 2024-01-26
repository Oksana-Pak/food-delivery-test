import PropTypes from "prop-types";
import { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { getDataFromLocalStorage } from "../../services/localStorage";

export const Counter = ({ onChange, dishId }) => {
  const [count, setCount] = useState(
    () =>
      getDataFromLocalStorage("dishesCart")?.find(
        (dishCart) => dishCart._id === dishId
      )?.quantity ?? 1
  );

  const increment = () => {
    setCount((prevState) => prevState + 1);
    onChange(count + 1);
  };

  const decrement = () => {
    if (count === 1) {
      return null;
    }
    setCount((prevState) => prevState - 1);
    onChange(count - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={increment}>
        <AiFillCaretUp />
      </button>
      <button type="button" onClick={decrement}>
        <AiFillCaretDown />
      </button>
    </div>
  );
};
Counter.propTypes = {
  onChange: PropTypes.func.isRequired,
  dishId: PropTypes.string.isRequired,
};
