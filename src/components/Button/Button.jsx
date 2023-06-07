import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";

export const Button = ({ title, onClick, following, width, hover }) => {
  return (
    <ButtonStyled
      type="button"
      width={width}
      following={following}
      onClick={onClick}
      hover={hover}
    >
      {title}
    </ButtonStyled>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  following: PropTypes.bool,
  width: PropTypes.string.isRequired,
  hover: PropTypes.bool,
};
