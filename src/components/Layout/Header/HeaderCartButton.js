import styled from "styled-components";
import { CartIcon } from "../../../assets";

function HeaderCartButton() {
  return (
    <ButtonWrapper>
      <span className="icon__span">
        <CartIcon />
      </span>
      <span className="badge__span">3</span>
    </ButtonWrapper>
  );
}

export default HeaderCartButton;

const ButtonWrapper = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: inherit;
  color: white;
  padding: 0rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  &:hover,
  &:active {
    transform: scale(1.2);
    transition: 0.3s ease-in-out;
  }
  .icon__span {
    width: 1.35rem;
    height: auto;
  }
  .badge__span {
    padding: 0rem 0.35rem;
    font-weight: bold;
  }
`;
