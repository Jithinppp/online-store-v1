import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  position: relative;
  color: #fff;
`;
export const ProductCardSubContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.7rem 1rem;
  background-color: #4446;
  border-radius: 5px;
`;
export const ProductCardImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 5px;
`;

export const ProductCardName = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: -1px;
  font-family: "Gloria Hallelujah", cursive;
  margin-bottom: 0.5rem;
`;
export const ProductCardGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProductCardPrice = styled.h4`
  font-weight: 300;
  font-size: 1rem;
`;
export const ProductCardButton = styled.button`
  cursor: pointer;
  letter-spacing: -1px;
  border: none;
  background-color: #ffe;
  border-radius: 5px;
  font-size: 0.8rem;
  padding: 3px 20px;
`;
