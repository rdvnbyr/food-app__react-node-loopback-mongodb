import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export function HeaderAuthLinks() {
  const { isLogin } = useSelector((state) => ({
    isLogin: state.auth.isLogin,
  }));
  return (
    <AuthLinksWrapper>
      {!isLogin ? (
        <>
          <NavLink exact to="/auth/login">
            LOGIN
          </NavLink>
          <NavLink exact to="/auth/signup">
            SIGNUP
          </NavLink>
        </>
      ) : (
        <NavLink exact to="/logout">
          LOGOUT
        </NavLink>
      )}
    </AuthLinksWrapper>
  );
}

const AuthLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 0 1rem;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2);
      transition: 0.3s ease-in-out;
    }
  }
`;
