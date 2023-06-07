import { useState, useEffect } from "react";

import { Form } from "../../components/Form/Form";
import { Section, Wrap, List, Item } from "./ShoppingCart.styled";
import { Container } from "../../components/Layout/Layout.styled";
import { Counter } from "../../components/Counter/Counter";

export const ShoppingCart = () => {
  const dishesCart = JSON.parse(localStorage.getItem("dishesCart"));
  console.log(dishesCart);
  if (!dishesCart) {
    return null;
  }

  return (
    <Section>
      <Container>
        <Wrap>
          <Form />
          <List>
            {dishesCart?.map((dish) => (
              <Item key={dish._id}>
                <img src={dish.preview} />
                <div>
                  <p>{dish.title}</p>
                  <p>Price</p>
                  <Counter />
                </div>
              </Item>
            ))}
          </List>
        </Wrap>
      </Container>
    </Section>
  );
};

// export default ShoppingCart;
