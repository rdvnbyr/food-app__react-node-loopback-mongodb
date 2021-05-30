import styled from "styled-components";
import { Redirect, useLocation } from "react-router-dom";

import Login from "../Layout/auth/Login";
import SignUp from "../Layout/auth/SignUp";

const Auth = () => {
  const location = useLocation().pathname.split("/")[2];

  if (location !== "login" && location !== "signup") {
    return <Redirect to="/" />;
  };

  return (
    <AuthPage>
      {location === "login" && <Login />}
      {location === "signup" && <SignUp />}
    </AuthPage>
  );
};

export default Auth;

const AuthPage = styled.main`
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
