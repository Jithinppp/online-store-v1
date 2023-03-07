import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  height: 60px;
`;
export const Logo = styled(Link)`
  font-size: 1.4rem;
  font-weight: 700;
  color: #434343;
  font-family: "Gloria Hallelujah", cursive;
`;
export const NavShoppingBag = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  & span {
    position: absolute;
    margin-top: 4px;
    font-size: 0.7rem;
    font-weight: 600;
  }
  & svg {
    font-size: 1.5rem;
  }
`;
export const NavItems = styled.div`
  display: flex;
  align-items: center;
`;
export const NavItem = styled(Link)`
  padding: 0.4rem 1rem;
  border-radius: 5px;
  &:hover {
    text-decoration: underline;
  }
`;
export const NavSignOutButton = styled.span`
  margin: 0 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
