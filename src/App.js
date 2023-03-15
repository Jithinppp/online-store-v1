import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.component";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import Home from "./routes/Home/Home";
import Authenticate from "./routes/Authenticate/Authenticate";
import Checkout from "./routes/Checkout/Checkout";
import Category from "./routes/Category/Category";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProductsStatus,
} from "./features/products/productsSlice";
import {
  checkUserLoggedIn,
  selectCurrentUserStatus,
} from "./features/user/userSlice";

function App() {
  const dispatch = useDispatch();
  const productsStatus = useSelector(selectProductsStatus);
  const currentUserStatus = useSelector(selectCurrentUserStatus);

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts());
    }
    if (currentUserStatus === "idle") dispatch(checkUserLoggedIn());
  }, [productsStatus, dispatch, currentUserStatus]);

  return (
    <Routes>
      <Route element={<Navigation />}>
        <Route index path="/" element={<Home />} />
        <Route path="/authenticate" element={<Authenticate />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/:categoryName" element={<Category />} />
      </Route>
      {/* <ToastContainer /> */}
    </Routes>
  );
}

export default App;
