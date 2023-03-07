import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeCategoryContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.4s ease;
  &:hover {
    transform: scale(101%);
  }
`;
export const HomeCategoryItem = styled.p`
  font-size: 1.2rem;
  position: absolute;
  color: #ffe;
  font-weight: 500;
  letter-spacing: -1px;
  font-family: "Gloria Hallelujah", cursive;
`;

export const HomeCategoryBackgroundImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
`;
