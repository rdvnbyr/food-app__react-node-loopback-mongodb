import styled from "styled-components";
import { NavLink } from "react-router-dom";

export function HeaderLinks() {
  return (
    <WrapperDiv>
      <NavLink exact to="/" activeClassName="active">
        HOME
      </NavLink>
      <NavLink exact to="/about">
        ABOUT
      </NavLink>
      <NavLink exact to="/contact">
        CONTACT
      </NavLink>
    </WrapperDiv>
  );
}

const WrapperDiv = styled.div`
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
  .active {
    transform: scale(1.2);
  }
`;
