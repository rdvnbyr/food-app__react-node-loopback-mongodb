import styled from "styled-components";
import { CartIcon } from "../../../assets";

const ButtonWrapper = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;
  &:hover,
  &:active {
    background-color: #2c0d00;
    .badge__span {
      background-color: #92320c;
    }
  }
  .icon__span {
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
  }
  .badge__span {
    background-color: #b94517;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
  }
`;

function HeaderCartButton() {
  return (
    <ButtonWrapper>
      <span className="icon__span">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge__span">3</span>
    </ButtonWrapper>
  );
}

export default HeaderCartButton;
