import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  CardElementContainer,
  CheckoutButton,
  PaymentFormContainer,
} from "./PaymentForm.style";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { clearCart } from "../../features/cart/cartSlice";

const PaymentForm = ({ totalAmount }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const response = await axios.post(
      `${process.env.REACT_APP_APP_SERVER_URL}/create-payment`,
      {
        amount: totalAmount * 100,
      }
    );
    const { client_secret } = response.data.paymentIntent;
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (paymentResult.error) {
      toast.error("can't make payment");
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        toast.success("payment successful");
        navigate("/");
        dispatch(clearCart());
      }
    }
  };

  return (
    <PaymentFormContainer onSubmit={paymentHandler}>
      <CardElementContainer>
        <CardElement />
      </CardElementContainer>
      <CheckoutButton>Checkout</CheckoutButton>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
