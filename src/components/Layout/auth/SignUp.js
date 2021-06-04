import { useRef } from "react";
import { Field } from "formik";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FormikHandler } from "./FormikHandler";
import { Input, UIButton } from "../../UIElements";
import { authActions } from "../../../_redux/auth";

const signUpValidationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 symbols")
    .max(12, "Maximum 12 symbols")
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

// Component Start
function SignupPage() {
  const dispatch = useDispatch();
  const submitHandler = (values) => {
    const user = {
      username: values.username,
      email: values.email,
      password: values.password,
    };

    dispatch(authActions.register.call(user));
  };

  const btnRef = useRef();
  const buttonClickHandler = () => {
    if (btnRef.current) {
      btnRef.current.click();
    }
  };

  return (
    <WrapperForm>
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
          <Link to="/auth/login">
            <span className="mx-2 btn-link">Login</span>
          </Link>
        </div>
        <UIButton color="primary" text="Sign Up" onClick={buttonClickHandler} />
      </ButtonWrapper>
    </WrapperForm>
  );
}

export default SignupPage;

const WrapperForm = styled.div`
  width: 600px;
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
