import PropTypes from "prop-types";
import { ShopWrapper, Nav, NavItem } from "./ShopNav.styled";

const links = [
  {
    to: "/",
    title: "seafood",
  },
  {
    to: "/dessert",
    title: "dessert",
  },
  {
    to: "/vegetarian",
    title: "vegetarian",
  },
  {
    to: "/pasta",
    title: "pasta",
  },
  {
    to: "/chicken",
    title: "chicken",
  },
];

export const ShopNav = ({ onClick, isDisabled, shop }) => {
  const handleClick = (e, category) => {
    if (isDisabled) {
      e.preventDefault(); // Забороняємо перехід на посиланнях
    } else {
      onClick(category);
    }
  };

  return (
    <ShopWrapper>
      <p>Shops:</p>
      <Nav>
        {links.map(({ to, title }) => (
          <NavItem
            key={title}
            to={isDisabled ? null : to}
            onClick={(e) => handleClick(e, title)}
            className={shop === title ? "" : isDisabled ? "disabled-link" : ""}
          >
            {title}
          </NavItem>
        ))}
      </Nav>
    </ShopWrapper>
  );
};

ShopNav.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  shop: PropTypes.string.isRequired,
};
