import { Form } from "../../components/Form/Form";
import { Section, Wrap, List, Item } from "./ShoppingCart.styled";
import { Container } from "../../components/Layout/Layout.styled";
import { Counter } from "../../components/Counter/Counter";

const ShoppingCart = () => {
  const dishesCart = JSON.parse(localStorage.getItem("dishesCart"));

  if (!dishesCart) {
    return null;
  }

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
                      <p>Price</p>
                      <Counter />
                    </div>
                  </Item>
                ))}
              </List>
            </>
          ) : (
            <p>You do not have any gitorder dishes</p>
          )}
        </Wrap>
      </Container>
    </Section>
  );
};

export default ShoppingCart;
