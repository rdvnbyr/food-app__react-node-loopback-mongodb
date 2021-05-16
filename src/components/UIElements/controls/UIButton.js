import styled from "styled-components";
import { darken } from "polished";

const UIButtonWrapper = styled.button.attrs((props) => ({
  type: props.type || "button",
}))`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #f7f7f7;
  border: 0;
  border-radius: 0.25rem;
  font-size: 1.25rem;
  font-family: inherit;
  padding: 0 2.25rem;
  height: 3.5rem;
  cursor: pointer;
  background: transparent;
  outline: none;
  transition-property: background, box-shadow;
  transition-duration: 0.35s;
  ${props => props.primary && {
      background: '#5d2fdf'
  }}
  &:hover {
    background: ${darken(0.125, '#5d2fdf')}
  }
  &:focus {
    box-shadow: 0 0 0 1px #5d2fdf;
  }
  &:focus {
    box-shadow: 0 0 0 1px #5d2fdf;
  }
`;

export const UIButton = (props) => {
  return <UIButtonWrapper {...props}>{props.text}</UIButtonWrapper>;
};
