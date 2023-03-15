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

  return (
    <CheckoutContainer>
      <div>
        <CheckoutTitle>My bag</CheckoutTitle>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CheckoutItem key={item.id} checkoutItem={item} />
          ))}
        </>
      )}
      <CheckoutTotalTitle>
        Total
        <CheckoutTotalAmount>₹{totalAmount}</CheckoutTotalAmount>
      </CheckoutTotalTitle>
      {!currentUser ? (
        <p>
          Login to checkout items <Link to={"/authenticate"}>authenticate</Link>{" "}
        </p>
      ) : (
        <PaymentForm totalAmount={totalAmount} />
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
