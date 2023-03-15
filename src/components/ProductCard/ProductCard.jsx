import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import {
  ProductCardButton,
  ProductCardContainer,
  ProductCardGroup,
  ProductCardImage,
  ProductCardName,
  ProductCardPrice,
  ProductCardSubContainer,
} from "./productCard.style";

const ProductCard = ({ productDetails }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(addToCart(productDetails));
  };

  return (
    <ProductCardContainer>
      <ProductCardImage src={productDetails.imageUrl} />
      <ProductCardSubContainer>
        <ProductCardName>{productDetails.name}</ProductCardName>
        <ProductCardGroup>
          <ProductCardPrice>{productDetails.price}₹</ProductCardPrice>
          <ProductCardButton onClick={clickHandler}>
            Add to cart
          </ProductCardButton>
        </ProductCardGroup>
      </ProductCardSubContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
