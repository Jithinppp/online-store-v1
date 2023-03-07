import React from "react";
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
  return (
    <ProductCardContainer>
      <ProductCardImage src={productDetails.imageUrl} />
      <ProductCardSubContainer>
        <ProductCardName>{productDetails.name}</ProductCardName>
        <ProductCardGroup>
          <ProductCardPrice>{productDetails.price}$</ProductCardPrice>
          <ProductCardButton>Add to cart</ProductCardButton>
        </ProductCardGroup>
      </ProductCardSubContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
