import styled from "styled-components";

export const PaymentFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  max-width: 500px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;
export const CardElementContainer = styled.div`
  margin: 1rem 0;
`;

export const CheckoutButton = styled.button`
  margin: 8px 0;
  cursor: pointer;
  border: none;
  background-color: #444;
  color: #fff;
  padding: 8px 0;
  border-radius: 4px;
`;
