import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Store from "./pages/Store";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import Students from "./pages/Students";
import { getProducts } from "./API/Products";
import { setProducts } from "./Redux/Slices/productsSlice";
import { useDispatch } from "react-redux";
import Cart from "./pages/Cart";


export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      dispatch(setProducts(data));
    })();
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="students" element={<Students/>} />
          <Route path="login" element={<Login />} />
          <Route path="store" element={<Store />} />
          <Route path="cart" element={<Cart />} />
          <Route path="store/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}