import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { Shop } from "./pages/Shop/Shop";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";

// const ShoppingCart = lazy(() => import("./pages/ShoppingCart/ShoppingCart"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Shop />} />
        <Route path="dessert" element={<Shop />} />
        <Route path="vegetarian" element={<Shop />} />
        <Route path="pasta" element={<Shop />} />
        <Route path="chicken" element={<Shop />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
