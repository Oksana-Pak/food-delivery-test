import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ShopWrapper = styled.div`
  width: 30%;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NavItem = styled(NavLink)`
  width: 100%;
  padding: 15px;
  border: 1px solid black;
  text-align: center;
  font-weight: 700;
  opacity: 0.7;

  &.active {
    color: #471ca9;
    background: #ebd8ff;
    /* background: red; */
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #471ca9;
    background: #5cd3a8;
  }

  &.disabled-link {
    color: #999; //Змінюємо колір тексту на сірий
    background: transparent;
  }
`;
