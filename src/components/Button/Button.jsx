import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";

export const Button = ({ title, onClick, width, ordered, hover }) => {
  return (
    <ButtonStyled
      type="button"
      width={width}
      onClick={onClick}
      ordered={ordered}
      hover={hover}
    >
      {title}
    </ButtonStyled>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  ordered: PropTypes.bool,
  width: PropTypes.string.isRequired,
  hover: PropTypes.bool,
};
