import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.component";

// components
import Home from "./routes/Home/Home";
import Authenticate from "./routes/Authenticate/Authenticate";
import Checkout from "./routes/Checkout/Checkout";
import Category from "./routes/Category/Category";

function App() {
  return (
    <Routes>
      <Route element={<Navigation />}>
        <Route index path="/" element={<Home />} />
        <Route path="/authenticate" element={<Authenticate />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/:categoryName" element={<Category />} />
      </Route>
    </Routes>
  );
}

export default App;
