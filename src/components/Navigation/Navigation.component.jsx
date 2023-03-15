import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../utils/firebase.utils";
// components
import {
  Logo,
  NavigationContainer,
  NavItem,
  NavItems,
  NavShoppingBag,
  NavSignOutButton,
} from "./navigation.style";
import { BsBag } from "react-icons/bs";
import {
  selectCurrentUser,
  setCurrentUser,
} from "../../features/user/userSlice";
import { selectCartItems } from "../../features/cart/cartSlice";
import { ToastContainer } from "react-toastify";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector(selectCurrentUser);
  const cartItemsLength = useSelector(selectCartItems).length;

  const signOutHandler = () => {
    signOut(auth).then(() => dispatch(setCurrentUser(null)));
  };

  return (
    <>
      <NavigationContainer>
        <Logo to={"/"}>Online-Store</Logo>
        <NavItems>
          {!currentUser ? (
            <NavItem to={"/authenticate"}>Login</NavItem>
          ) : (
            <NavSignOutButton onClick={signOutHandler}>
              Sign out
            </NavSignOutButton>
          )}
          <NavShoppingBag onClick={() => navigate("/checkout")}>
            <BsBag />
            <span>{cartItemsLength}</span>
          </NavShoppingBag>
        </NavItems>
      </NavigationContainer>
      <main style={{ padding: "0 10px" }}>
        <Outlet />
      </main>
      <ToastContainer />
    </>
  );
};

export default Navigation;
