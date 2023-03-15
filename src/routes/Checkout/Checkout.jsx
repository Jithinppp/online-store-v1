import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  calculateTotal,
  selectAmount,
  selectCartItems,
} from "../../features/cart/cartSlice";
import {
  CheckoutContainer,
  CheckoutTitle,
  CheckoutTotalAmount,
  CheckoutTotalTitle,
} from "./checkout.style";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import { selectCurrentUser } from "../../features/user/userSlice";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectAmount);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  console.log(cartItems, cartItems.length);

  if (cartItems.length > 0 && currentUser) {
    console.log("there is cart and payment");
    return (
      <CheckoutContainer>
        <div>
          <CheckoutTitle>My bag</CheckoutTitle>
        </div>

        {cartItems.map((item) => (
          <CheckoutItem key={item.id} checkoutItem={item} />
        ))}
        <CheckoutTotalTitle>
          Total
          <CheckoutTotalAmount>₹{totalAmount}</CheckoutTotalAmount>
        </CheckoutTotalTitle>
        <PaymentForm totalAmount={totalAmount} />
      </CheckoutContainer>
    );
  }

  return (
    <CheckoutContainer>
      {!currentUser ? (
        <p>
          Login to checkout items <Link to={"/authenticate"}>authenticate</Link>{" "}
        </p>
      ) : (
        <p>your cart is empty</p>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
