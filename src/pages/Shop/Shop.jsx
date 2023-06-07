import { useState, useEffect } from "react";
import * as Scroll from "react-scroll";
import { Container } from "../../components/Layout/Layout.styled";
import { Section, ShopWrap, ShopListWrap } from "./Shop.styled";
import { ShopNav } from "../../components/ShopNav/ShopNav";
import { DishList } from "../../components/DishList/DishList";
import { fetchDishes } from "../../services/api";
import { Button } from "../../components/Button/Button";
import { Loader } from "../../components/Loader/Loader";

export const Shop = () => {
  const [shop, setShop] = useState(
    () => JSON.parse(localStorage.getItem("shop")) ?? "seafood"
  );

  const [dishes, setDishes] = useState(
    () => JSON.parse(localStorage.getItem("dishes")) ?? []
  );
  console.log("dishes", dishes);
  const [totalDishes, setTotalDishes] = useState(0);
  const [page, setPage] = useState(
    () => JSON.parse(localStorage.getItem("page")) ?? 1
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchDishes(page, shop).then((data) => {
      setDishes((prevDishes) => [...prevDishes, ...data.dishList]);
      setTotalDishes(data.total);
    });
    setLoading(false);
  }, [page, shop]);

  // doesn't work when refresh page
  useEffect(() => {
    console.log("useEffect local");
    localStorage.setItem("shop", JSON.stringify(shop));
    localStorage.setItem("page", JSON.stringify(page));
    // localStorage.setItem("dishes", JSON.stringify(dishes));
  }, [shop, dishes, page]);

  const handleNavClick = (shop) => {
    setDishes([]);
    setShop(shop);
    setPage(1);
  };

  const handleButtonClick = () => {
    setPage((prevState) => prevState + 1);
    const scroll = Scroll.animateScroll;
    scroll.scrollMore(500, { duration: 1000 });
  };

  return (
    <Section>
      <Container>
        <ShopWrap>
          <ShopNav onClick={handleNavClick} />
          <ShopListWrap>
            <DishList dishes={dishes} />
            {dishes.length < totalDishes && !loading && (
              <Button
                title="Load More"
                onClick={handleButtonClick}
                width="200px"
                hover
              />
            )}
            {dishes.length < totalDishes && loading && <Loader />}
          </ShopListWrap>
        </ShopWrap>
      </Container>
    </Section>
  );
};
