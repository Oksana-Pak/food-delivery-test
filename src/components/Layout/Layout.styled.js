import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.header`
  padding: 15px 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const Container = styled.div`
  max-width: 1340px;
  margin: 0 auto;
  padding: 0 50px;
`;

export const NavItem = styled(NavLink)`
  margin-right: 30px;
  font-weight: 700;
  opacity: 0.7;
  &.active {
    color: #471ca9;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #471ca9;
  }
`;

export const Main = styled.main`
  min-height: calc(100vh - 100px);
`;
export const Footer = styled.footer`
  padding: 15px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px -4px 6px -1px, rgba(0, 0, 0, 0.06) 0px -2px 4px -1px;
`;
