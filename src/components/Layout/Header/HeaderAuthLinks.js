import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

export function HeaderAuthLinks() {
  return (
    <AuthLinksWrapper>
      <NavLink exact to="/login">
        LOGIN
      </NavLink>
      <NavLink exact to="/signup">
        SIGNUP
      </NavLink>
    </AuthLinksWrapper>
  );
}
