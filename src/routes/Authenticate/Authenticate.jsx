import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  setCurrentUser,
} from "../../features/user/userSlice";
import {
  googlePopupSignIn,
  signInUserWithEmailAndPassword,
  signUpUserWithEmailAndPassword,
} from "../../utils/firebase.utils";
import { Link, useNavigate } from "react-router-dom";

// components
import {
  AuthenticateContainer,
  AuthenticateFormSeparator,
  AuthenticateInput,
  AuthenticateSignInContainer,
  AuthenticateSignInForm,
  AuthenticateSignUpContainer,
  AuthenticateSubmitBtn,
  AuthenticateTitle,
  PopupSignInButton,
} from "./authenticate.style";
import { FcGoogle } from "react-icons/fc";

const Authenticate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const signUpHandler = (e) => {
    e.preventDefault();
    signUpUserWithEmailAndPassword(email, password).then((val) => {
      dispatch(setCurrentUser({ email: val.email, uid: val.uid }));
      navigate("/");
    });
  };

  const signInHandler = (e) => {
    e.preventDefault();
    signInUserWithEmailAndPassword(email, password).then((val) => {
      dispatch(setCurrentUser({ email: val.email, uid: val.uid }));
      navigate("/");
    });
  };

  const googlePopupSignInHandler = () => {
    googlePopupSignIn().then((val) => {
      dispatch(setCurrentUser({ email: val.user.email, uid: val.user.uid }));
      navigate("/");
    });
  };

  return (
    <>
      {currentUser ? (
        <AuthenticateTitle>
          You already signed in go back to{" "}
          <Link to={"/"} style={{ borderBottom: "1px solid #4447" }}>
            Home
          </Link>
        </AuthenticateTitle>
      ) : (
        <AuthenticateContainer>
          {/* sign in */}
          <AuthenticateSignInContainer>
            <AuthenticateTitle>Welcome back !</AuthenticateTitle>
            <AuthenticateSignInForm onSubmit={signInHandler}>
              <AuthenticateInput
                placeholder="your email address"
                type={"email"}
                onChange={(e) => setEmail(e.target.value)}
              />
              <AuthenticateInput
                placeholder="password"
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <AuthenticateSubmitBtn type="submit">
                Sign in
              </AuthenticateSubmitBtn>
            </AuthenticateSignInForm>

            <AuthenticateFormSeparator>
              <span>OR</span>
            </AuthenticateFormSeparator>
            <PopupSignInButton onClick={googlePopupSignInHandler}>
              <FcGoogle /> continue with google
            </PopupSignInButton>
          </AuthenticateSignInContainer>
          {/* sign up */}
          <AuthenticateSignUpContainer>
            <AuthenticateTitle>Create an account</AuthenticateTitle>
            <AuthenticateSignInForm onSubmit={signUpHandler}>
              <AuthenticateInput
                placeholder="your email address"
                type={"email"}
                onChange={(e) => setEmail(e.target.value)}
              />
              <AuthenticateInput
                placeholder="password"
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <AuthenticateSubmitBtn type="submit">
                Create account
              </AuthenticateSubmitBtn>
            </AuthenticateSignInForm>
          </AuthenticateSignUpContainer>
        </AuthenticateContainer>
      )}
    </>
  );
};

export default Authenticate;
