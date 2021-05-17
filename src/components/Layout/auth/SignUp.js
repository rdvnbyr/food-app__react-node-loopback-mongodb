import { useRef } from "react";
import styled from "styled-components";
import { Field } from "formik";
import * as Yup from "yup";

import { FormikHandler } from "./FormikHandler";
import { Input, UIButton } from "../../UIElements";
import { Link } from "react-router-dom";

const WrapperDiv = styled.div`
  width: 600px;
  margin: 10rem auto;
  & form {
    width: inherit;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Title = styled.div`
  color: var(--color-dark);
  font-size: 1.8rem;
  text-align: center;
  padding-top: 1.25rem;
  font-weight: bold;
`;
const FieldWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.8rem 2.5rem;
  & label {
    text-align: left;
    font-size: 1.25rem;
  }
`;
const ButtonWrapper = styled(FieldWrapper)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const signUpValidationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(2, "Minimum 6 symbols")
    .max(50, "Maximum 12 symbols")
    .required("Password is required"),
  repeatPassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Password and Confirm Password didn't match"
    ),
  }),
});

const initialValues = {
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
};

function SignupPage() {
  const submitHandler = (values) => {
    console.log(values);
  };

  const btnRef = useRef();
  const buttonClickHandler = () => {
    if (btnRef.current) {
      btnRef.current.click();
    }
  };

  return (
    <WrapperDiv>
      <Title>SIGN UP</Title>
      <FormikHandler
        validationSchema={signUpValidationSchema}
        initialValues={initialValues}
        submitHandler={submitHandler}
        btnRef={btnRef}
      >
        <FieldWrapper>
          <Field
            component={Input}
            {...{
              name: "username",
              label: "Username",
              withFeedbackLabel: true,
              withLabel: true,
              placeholder: "Username",
            }}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Field
            component={Input}
            {...{
              name: "email",
              label: "Email",
              withFeedbackLabel: true,
              withLabel: true,
              type: "email",
              placeholder: "Email",
            }}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Field
            component={Input}
            {...{
              name: "password",
              label: "Password",
              withFeedbackLabel: true,
              withLabel: true,
              type: "password",
              placeholder: "Password",
            }}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Field
            name="repeatPassword"
            component={Input}
            {...{
              label: "Repeat Password",
              withFeedbackLabel: true,
              withLabel: true,
              type: "password",
              placeholder: "Repeat Password",
            }}
          />
        </FieldWrapper>
      </FormikHandler>
      <ButtonWrapper>
        <div>
          Do you already have an account
          <Link to="/login">
            <span className="mx-2 btn-link">Login</span>
          </Link>
        </div>
        <UIButton primary text="Sign Up" onClick={buttonClickHandler} />
      </ButtonWrapper>
    </WrapperDiv>
  );
}

export default SignupPage;
