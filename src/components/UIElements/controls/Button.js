import styled from "styled-components";
import { desaturate } from "polished";

export const Button = (props) => {
  return <ButtonWrapper {...props}>{props.text}</ButtonWrapper>;
};

const ButtonWrapper = styled.button.attrs((props) => ({
  type: props.type || "button",
}))`
  cursor: pointer;
  background-color: ${(props) => props.color || "#8a2b06"};
  border: 1px solid ${(props) => props.color || "#8a2b06"};
  color: white;
  padding: 0 2rem;
  font-weight: bold;
  height: 3rem;
  &:hover,
  &:active {
    background-color: ${(props) => desaturate(0.3, props.color || "#8a2b06")};
    border-color: ${(props) => desaturate(0.3, props.color || "#8a2b06")};
  }
`;
