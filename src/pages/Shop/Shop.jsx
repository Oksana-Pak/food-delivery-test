import { useState, useEffect } from "react";
import * as Scroll from "react-scroll";
import { Container } from "../../components/Layout/Layout.styled";
import { Section, ShopWrap, ShopListWrap } from "./Shop.styled";
import { ShopNav } from "../../components/ShopNav/ShopNav";
import { DishList } from "../../components/DishList/DishList";
import { fetchDishes } from "../../services/api";
import { Button } from "../../components/Button/Button";
import { Loader } from "../../components/Loader/Loader";
import {
  saveDataToLocalStorage,
  getDataFromLocalStorage,
} from "../../services/localStorage";

export const Shop = () => {
  const [shop, setShop] = useState(
    () => getDataFromLocalStorage("shop") ?? "seafood"
  );

  const [dishes, setDishes] = useState(
    () => getDataFromLocalStorage("dishes") ?? []
  );

  const [totalDishes, setTotalDishes] = useState(
    () => getDataFromLocalStorage("totalDishes") ?? 0
  );
  const [page, setPage] = useState(() => getDataFromLocalStorage("page") ?? 1);
  const [loading, setLoading] = useState(false);
  const [isLinkDisabled, setIsLinkDisabled] = useState(
    () => getDataFromLocalStorage("statusDisableLink") ?? false
  );
  const fetchMoreDishes = (page, shop) => {
    setLoading(true);
    fetchDishes(page, shop).then((data) => {
      setDishes((prevDishes) => [...prevDishes, ...data.dishList]);
      setTotalDishes(data.total);
      setLoading(false);
    });
  };

  useEffect(() => {
    console.log(dishes.length);
    if (dishes.length === 0) {
      fetchMoreDishes(1, shop);
    }
    console.log("Спрацював 1 useEffect");
  }, [shop, dishes]);

  useEffect(() => {
    console.log("Спрацював 2 useEffect");
    saveDataToLocalStorage("shop", shop);
    saveDataToLocalStorage("page", page);
    saveDataToLocalStorage("dishes", dishes);
    saveDataToLocalStorage("totalDishes", totalDishes);
  }, [shop, dishes, page, totalDishes]);

  const handleNavClick = (shop) => {
    setDishes([]);
    setShop(shop);
    setPage(1);
  };

  const handleButtonClick = () => {
    setPage((prevState) => prevState + 1);

    fetchMoreDishes(page + 1, shop);
    const scroll = Scroll.animateScroll;
    scroll.scrollMore(500, { duration: 1000 });
  };

  const changeStatusLocalDish = (newDish) => {
    const updatedDish = dishes.map((dish) =>
      newDish._id === dish._id ? newDish : dish
    );
    setDishes(updatedDish);
  };

  const changeStatusDisableLink = () => {
    setIsLinkDisabled(!isLinkDisabled);
    saveDataToLocalStorage("statusDisableLink", !isLinkDisabled);
  };

  return (
    <Section>
      <Container>
        <ShopWrap>
          <ShopNav
            onClick={handleNavClick}
            isDisabled={isLinkDisabled}
            shop={shop}
          />
          <ShopListWrap>
            <DishList
              dishes={dishes}
              onChangeLocalStatus={changeStatusLocalDish}
              onChangeStatusDisableLink={changeStatusDisableLink}
            />
            {dishes.length < totalDishes && !loading && (
              <Button
                title="Load More"
                onClick={handleButtonClick}
                width="200px"
                hover
              />
            )}
            {loading && <Loader />}
          </ShopListWrap>
        </ShopWrap>
      </Container>
    </Section>
  );
};
