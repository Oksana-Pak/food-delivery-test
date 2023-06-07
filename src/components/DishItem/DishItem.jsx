import PropTypes from "prop-types";
import { useState } from "react";
import {
  DishItemStyled,
  PreviewImg,
  ImgTitle,
  ButtonAdd,
} from "./DishItem.styled";

export const DishItem = ({ addDish, removeDish, ...dish }) => {
  const { preview, title, _id: id } = dish;
  const [isDishInCart, setIsDishInCart] = useState(false);
  // const [dishInCart, setDishInCart] = useState(null);

  const handleClickButton = () => {
    if (isDishInCart) {
      setIsDishInCart(false);
      removeDish(dish);
    } else {
      setIsDishInCart(true);
      addDish(dish);
    }
  };

  // const handleClickAdd = () => {
  //   setIsDishInCart(true);
  //   console.log(isDishInCart);
  //   addDish(dish);
  // };

  // const handleClickRemove = () => {
  //   setIsDishInCart(false);
  //   removeDish(dish);
  // };

  return (
    <DishItemStyled>
      <PreviewImg src={preview} alt={title} />
      <ImgTitle>{title}</ImgTitle>
      {/* {isDishInCart ? (
        <ButtonAdd
          type="button"
          title={"Remove from Cart"}
          onClick={handleClickRemove}
          width="120px"
          hover
        />
      ) : (
        <ButtonAdd
          type="button"
          title={"Add to Cart"}
          onClick={handleClickAdd}
          width="120px"
          hover
        />
      )} */}
      <ButtonAdd
        type="button"
        title={isDishInCart ? "Remove from Cart" : "Add to Cart"}
        onClick={handleClickButton}
        width="120px"
        hover
      />
    </DishItemStyled>
  );
};

DishItem.propTypes = {
  addDish: PropTypes.func.isRequired,
  removeDish: PropTypes.func.isRequired,
};
