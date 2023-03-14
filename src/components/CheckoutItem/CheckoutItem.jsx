import React from "react";
import {
  CheckoutItemContainer,
  CheckoutItemDecrementQty,
  CheckoutItemDescContainer,
  CheckoutItemImage,
  CheckoutItemIncrementQty,
  CheckoutItemName,
  CheckoutItemPrice,
  CheckoutItemQty,
  CheckoutItemQtyContainer,
  CheckoutItemQtyText,
} from "./checkoutItem.style";
import { IoMdClose } from "react-icons/io";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  decrementCartItem,
  incrementCartItem,
  removeFromCart,
} from "../../features/cart/cartSlice";

const CheckoutItem = ({ checkoutItem }) => {
  const dispatch = useDispatch();

  return (
    <CheckoutItemContainer>
      <div style={{ display: "flex" }}>
        <CheckoutItemImage src={checkoutItem.imageUrl} />
        <CheckoutItemDescContainer>
          <CheckoutItemName>{checkoutItem.name}</CheckoutItemName>
          <CheckoutItemPrice>${checkoutItem.price}</CheckoutItemPrice>
          <CheckoutItemQtyContainer>
            <CheckoutItemQtyText>Quantity</CheckoutItemQtyText>
            <CheckoutItemDecrementQty
              onClick={() => dispatch(decrementCartItem(checkoutItem))}
            >
              <AiOutlineMinus />
            </CheckoutItemDecrementQty>
            <CheckoutItemQty>{checkoutItem.qty}</CheckoutItemQty>
            <CheckoutItemIncrementQty
              onClick={() => dispatch(incrementCartItem(checkoutItem))}
            >
              <AiOutlinePlus />
            </CheckoutItemIncrementQty>
          </CheckoutItemQtyContainer>
        </CheckoutItemDescContainer>
      </div>
      <IoMdClose
        onClick={() => dispatch(removeFromCart(checkoutItem))}
        style={{ cursor: "pointer" }}
      />
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
