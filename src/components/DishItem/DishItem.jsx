import PropTypes from "prop-types";
import { useState } from "react";
import {
  DishItemStyled,
  PreviewImg,
  ImgTitle,
  ButtonAdd,
} from "./DishItem.styled";

export const DishItem = ({ addDish, removeDish, ...dish }) => {
  const { preview, title, _id } = dish;

  const [isDishInCart, setIsDishInCart] = useState(
    () =>
      JSON.parse(localStorage.getItem("dishes"))?.find(
        (dishCart) => dishCart._id === _id
      )?.isDishInCart ?? false
  );

  const newDish = { ...dish };

  const handleChangeStatus = () => {
    newDish.isDishInCart = !isDishInCart;
  };

  const handleClickButton = () => {
    if (isDishInCart) {
      setIsDishInCart(false);
      handleChangeStatus();
      removeDish(newDish);
    } else {
      setIsDishInCart(true);
      handleChangeStatus();
      addDish(newDish);
    }
  };

  return (
    <DishItemStyled>
      <PreviewImg src={preview} alt={title} />
      <ImgTitle>{title}</ImgTitle>
      <ButtonAdd
        type="button"
        title={isDishInCart ? "Remove from Cart" : "Add to Cart"}
        onClick={handleClickButton}
        ordered={isDishInCart}
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
