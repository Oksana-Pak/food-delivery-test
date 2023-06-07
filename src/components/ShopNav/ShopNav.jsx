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

export const ShopNav = ({ onClick }) => {
  const handleClick = (category) => {
    onClick(category);
  };
  return (
    <ShopWrapper>
      <p>Shops:</p>
      <Nav>
        {links.map(({ to, title }) => (
          <NavItem key={title} to={to} onClick={() => handleClick(title)}>
            {title}
          </NavItem>
        ))}
      </Nav>
    </ShopWrapper>
  );
};

ShopNav.propTypes = {
  onClick: PropTypes.func.isRequired,
};
