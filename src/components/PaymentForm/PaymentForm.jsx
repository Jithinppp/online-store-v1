import React from "react";
import {
  CardElementContainer,
  CheckoutButton,
  PaymentFormContainer,
} from "./PaymentForm.style";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentForm = ({ totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const response = await axios.post("http://localhost:5000/create-payment", {
      amount: totalAmount * 100,
    });
    const { client_secret } = response.data.paymentIntent;
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (paymentResult.error) {
      alert("error while payment");
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("payment successful ");
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
