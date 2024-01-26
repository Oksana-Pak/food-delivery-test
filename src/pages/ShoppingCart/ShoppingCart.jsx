import { useState } from "react";
import { Form } from "../../components/Form/Form";
import { Section, Wrap, List, Item } from "./ShoppingCart.styled";
import { Container } from "../../components/Layout/Layout.styled";
import { Counter } from "../../components/Counter/Counter";
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "../../services/localStorage";

const ShoppingCart = () => {
  const [dishesCart, setDishesCart] = useState(
    () => getDataFromLocalStorage("dishesCart") ?? []
  );

  const calculateTotal = () => {
    return dishesCart.reduce(
      (total, dish) => total + dish.price * dish.quantity,
      0
    );
  };

  const handleCounterChange = (dishId, newQuantity) => {
    // Оновлення кількості товару в кошику
    const updatedDishesCart = dishesCart.map((dish) =>
      dish._id === dishId ? { ...dish, quantity: newQuantity } : dish
    );

    setDishesCart(updatedDishesCart);
    saveDataToLocalStorage("dishesCart", updatedDishesCart);
  };

  return (
    <Section>
      <Container>
        <Wrap>
          {dishesCart.length > 0 ? (
            <>
              <Form />
              <List>
                {dishesCart?.map((dish) => (
                  <Item key={dish._id}>
                    <img src={dish.preview} />
                    <div>
                      <p>{dish.title}</p>
                      <p>Price: {dish.price}</p>
                      <Counter
                        onChange={(newQuantity) => {
                          handleCounterChange(dish._id, newQuantity);
                        }}
                        dishId={dish._id}
                      />
                    </div>
                  </Item>
                ))}
              </List>
              <p>Total price: ${calculateTotal()}</p>
            </>
          ) : (
            <p>You do not have any dishes ordered</p>
          )}
        </Wrap>
      </Container>
    </Section>
  );
};

export default ShoppingCart;
