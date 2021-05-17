import styled from "styled-components";

const UiInput = styled.input`
  border: 2px solid var(--primary-color);
  padding: 0 ${(props) => props.size || "0.75rem"};
  width: 100%;
  height: 3rem;
  font-size: inherit;
  &:focus {
    outline: none;
    border: 2px solid var(--color-dark);
  }
`;

const FeedbackLabel = styled.small`
  color: ${(props) =>
    props.errors ? "var(--color-danger)" : "var(--color-dark)"};
`;

export const Input = ({
  field,
  form: { touched, errors },
  label,
  type = "text",
  id,
  withFeedbackLabel,
  withLabel,
  placeholder,
  props,
}) => {
  return (
    <>
      {withLabel && <label htmlFor={id}>{label}</label>}
      <UiInput
        id={id}
        type={type}
        placeholder={placeholder}
        {...props}
        {...field}
      />
      {withFeedbackLabel && (
        <FeedbackLabel errors={errors[field.name]}>
          {errors[field.name] || `Please enter ${label}`}
          
        </FeedbackLabel>
      )}
    </>
  );
};
