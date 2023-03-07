import styled from "styled-components";

export const AuthenticateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* align-items: center; */
`;
export const AuthenticateSignInContainer = styled.div`
  margin: 5px;
  min-width: 300px;
`;
export const AuthenticateSignUpContainer = styled.div`
  margin: 5px;
  min-width: 300px;
`;
export const PopupSignInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 0.4rem 3rem;
  cursor: pointer;
  background-color: #ffff;
  border: 0.5px solid #4445;
  border-radius: 4px;
  outline: none;
  & svg {
    margin-right: 0.3rem;
  }
`;
export const AuthenticateTitle = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: -2px;
  margin: 1rem 0;
`;
export const AuthenticateSignInForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const AuthenticateInput = styled.input`
  width: 100%;
  margin: 0.5rem 0;
  padding: 5px 8px;
  border-radius: 5px;
  border: 1px solid #4444;
`;
export const AuthenticateSubmitBtn = styled.button`
  width: 100%;
  margin: 10px 0;
  padding: 0.4rem 0;
  background-color: #444;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;
export const AuthenticateFormSeparator = styled.div`
  position: relative;
  background-color: #4444;
  width: 100%;
  height: 1px;
  margin: 2rem 0;
  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    color: #444d;
    padding: 0 1rem;
  }
`;
