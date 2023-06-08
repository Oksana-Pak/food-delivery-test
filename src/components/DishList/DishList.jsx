import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { DishItem } from "../DishItem/DishItem";
import { DishListStyled } from "./DishList.styled";

export const DishList = ({ onChangeLocalStatus, dishes }) => {
  const [dishesCart, setDishesCart] = useState(
    () => JSON.parse(localStorage.getItem("dishesCart")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("dishesCart", JSON.stringify(dishesCart));
  }, [dishesCart]);

  const addDishToCart = (dish) => {
    setDishesCart((prevDishes) => [...prevDishes, dish]);
    onChangeLocalStatus(dish);
  };

  const removeDishFromCart = (dish) => {
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
  dishes: PropTypes.array.isRequired,
};
