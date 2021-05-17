import styled from "styled-components";

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
  ${(props) =>
    props.primary && {
      background: "var(--primary-color)",
    }}
  &:hover {
    background: var(--primary-color-dark);
  }
  &:focus {
    box-shadow: 0 0 0 1px var(--primary-color);
  }
  &:focus {
    box-shadow: 0 0 0 1px var(--primary-color);
  }
`;

export const UIButton = (props) => {
  return <UIButtonWrapper {...props}>{props.text}</UIButtonWrapper>;
};
