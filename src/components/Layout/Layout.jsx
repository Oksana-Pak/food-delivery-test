import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Loader } from "../Loader/Loader";
import { Nav, Container, NavItem, Main, Footer } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <Nav>
        <Container>
          <nav>
            <NavItem to="/" end>
              Shop
            </NavItem>
            <NavItem to="cart">Shopping Cart</NavItem>
          </nav>
        </Container>
      </Nav>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>
        <p>© 2023 The Food Delivery app - Test task. Created by Oksana Pak</p>
      </Footer>
      <ToastContainer />
    </>
  );
};
