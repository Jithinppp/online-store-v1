import React from "react";
import { Outlet } from "react-router-dom";
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

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

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
          {currentUser ? (
            <NavShoppingBag>
              <BsBag />
              <span>20</span>
            </NavShoppingBag>
          ) : (
            ""
          )}
        </NavItems>
      </NavigationContainer>
      <main style={{ padding: "0 10px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Navigation;
