import { useRef } from "react";
import styled from "styled-components";
import { Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { FormikHandler } from "./FormikHandler";
import { Input, UIButton } from "../../UIElements";
import { Link } from "react-router-dom";
import { authActions } from "../../../_redux/auth";

const signUpValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

// Component start
function LoginPage() {
  const { loading } = useSelector((state) => ({
    loading: state.auth.loading,
  }));
  const dispatch = useDispatch();
  const submitHandler = (values) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    dispatch(authActions.login.call(user));
  };

  const btnRef = useRef();
  const buttonClickHandler = () => {
    if (btnRef.current) {
      btnRef.current.click();
    }
  };

  return (
    <WrapperDiv>
      <Title>LOGIN</Title>
      <FormikHandler
        validationSchema={signUpValidationSchema}
        initialValues={initialValues}
        submitHandler={submitHandler}
        btnRef={btnRef}
      >
        <FieldWrapper>
          <Field
            name="email"
            component={Input}
            {...{
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
            name="password"
            component={Input}
            {...{
              label: "Password",
              withFeedbackLabel: true,
              withLabel: true,
              type: "password",
              placeholder: "Password",
            }}
          />
        </FieldWrapper>
      </FormikHandler>
      <ButtonWrapper>
        <div>
          Do not you have an account yet
          <Link to="/auth/signup">
            <span className="mx-2 btn-link">Sign up</span>
          </Link>
        </div>
        <UIButton
          color="primary"
          text="Login"
          onClick={buttonClickHandler}
          disabled={loading}
        />
      </ButtonWrapper>
    </WrapperDiv>
  );
}

export default LoginPage;

const WrapperDiv = styled.div`
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
