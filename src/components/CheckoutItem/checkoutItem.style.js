import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  border: 1px solid #3334;
  border-radius: 4px;
  height: 110px;
`;
export const CheckoutItemImage = styled.img`
  height: auto;
  width: 100px;
  object-fit: cover;
  border-radius: 2px;
`;

export const CheckoutItemDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
`;

export const CheckoutItemQtyContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const CheckoutItemQty = styled.span`
  margin: 0 5px;
  font-weight: 600;
`;
export const CheckoutItemQtyText = styled.span`
  margin-right: 5px;
  font-weight: 400;
  letter-spacing: -1px;
  font-size: 0.9rem;
`;
export const CheckoutItemPrice = styled.p`
  font-weight: 500;
`;
export const CheckoutItemName = styled.h3`
  font-weight: 600;
  letter-spacing: -1px;
`;
export const CheckoutItemIncrementQty = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
`;
export const CheckoutItemDecrementQty = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
`;
