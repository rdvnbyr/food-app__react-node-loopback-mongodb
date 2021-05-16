import styled from "styled-components";

const UiInput = styled.input.attrs((props) => ({
  type: props.type || "text",
}))`
  border: 2px solid ${(props) => props.color || "#ad5502"};
  padding: 0 ${(props) => props.size || "0.75rem"};
  height: 3rem;
  font-size: inherit;
`;

export const Input = (props) => {
  return (
    <>
      {props.label && <label htmlFor={props.input.id}>{props.label}</label>}
      <UiInput id={props.input.id} {...props} />
    </>
  );
};
