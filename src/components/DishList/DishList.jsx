import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { DishItem } from "../DishItem/DishItem";
import { DishListStyled } from "./DishList.styled";
import {
  saveDataToLocalStorage,
  getDataFromLocalStorage,
} from "../../services/localStorage";

export const DishList = ({
  onChangeLocalStatus,
  dishes,
  onChangeStatusDisableLink,
}) => {
  const [dishesCart, setDishesCart] = useState(
    () => getDataFromLocalStorage("dishesCart") ?? []
  );

  useEffect(() => {
    saveDataToLocalStorage("dishesCart", dishesCart);
  }, [dishesCart]);

  const addDishToCart = (dish) => {
    if (dishesCart.length === 0) {
      onChangeStatusDisableLink();
    }
    setDishesCart((prevDishes) => [...prevDishes, dish]);
    onChangeLocalStatus(dish);
  };

  const removeDishFromCart = (dish) => {
    if (dishesCart.length === 1) {
      onChangeStatusDisableLink();
    }
    setDishesCart((prevDishes) => {
      const updatedDishes = prevDishes.filter(
        (prevDish) => prevDish._id !== dish._id
      );
      return updatedDishes;
    });
    onChangeLocalStatus(dish);
  };

  return (
    <DishListStyled>
      {dishes?.map((dish) => (
        <DishItem
          key={dish._id}
          {...dish}
          addDish={addDishToCart}
          removeDish={removeDishFromCart}
        />
      ))}
    </DishListStyled>
  );
};

DishList.propTypes = {
  onChangeLocalStatus: PropTypes.func.isRequired,
  onChangeStatusDisableLink: PropTypes.func.isRequired,
  dishes: PropTypes.array.isRequired,
};
