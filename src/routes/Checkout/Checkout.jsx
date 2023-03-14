import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../features/cart/cartSlice";
import { CheckoutContainer, CheckoutTitle } from "./checkout.style";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);
  return (
    <CheckoutContainer>
      <CheckoutTitle>My bag</CheckoutTitle>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} checkoutItem={item} />
      ))}
    </CheckoutContainer>
  );
};

export default Checkout;
