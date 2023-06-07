import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { DishItem } from "../DishItem/DishItem";
import { DishListStyled } from "./DishList.styled";

export const DishList = ({ dishes }) => {
  const [dishesCart, setDishesCart] = useState(
    () => JSON.parse(localStorage.getItem("dishesCart")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("dishesCart", JSON.stringify(dishesCart));
  }, [dishesCart]);

  const addDishToCart = (dish) =>
    setDishesCart((prevDishes) => {
      return [...prevDishes, dish];
    });

  const removeDishFromCart = (dish) => {
    setDishesCart((prevDishes) => {
      const index = prevDishes.findIndex((prevDish) => prevDish.id === dish.id);
      if (index > -1) {
        prevDishes.splice(index, 1);
      }
      console.log("prev", prevDishes);
      return [...prevDishes];
    });
  };

  return (
    <DishListStyled>
      {dishes.map((dish) => (
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
  dishes: PropTypes.array.isRequired,
};
