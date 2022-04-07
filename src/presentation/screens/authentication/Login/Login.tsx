import React, { FC } from "react";
import styled from "styled-components/native";
//custom components
import {
  Container,
  BigText,
  FormInput,
  RegularButton,
  Loader,
} from "@presentation/components";
import { Validation } from "@presentation/protocols";
import { Authentication } from "@domain/useCase";
import {RootStateOrAny,  useSelector, useDispatch } from "react-redux";
import { login } from "./redux/loginAction";

const LoginContainer = styled(Container)`
  flex: 1;
  justify-content: center;
  padding-horizontal: 6%;
`;
const TitleSection = styled.View`
  width: 100%;
  border-color: red;
`;
const FormSection = styled.View`
  width: 100%;
  padding-vertical: 8px;
`;

type Props = {
  validation: Validation;
  authentication: Authentication;
};

const Login: FC<Props> = ({ validation, authentication }: Props) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state:RootStateOrAny) => state.login);
  const [inputs, setInputs] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({ email: null, password: null });
  const validate = () => {
    let isValid = true;
    if (!inputs.email) {
      handleError("Required!", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Invalid email!", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Required!", "password");
      isValid = false;
    } else if (inputs.password.length < 8) {
      handleError("Please enter minimum 8 characters!", "password");
      isValid = false;
    }
    if (isValid) {
      dispatch(
        login({
          authentication: authentication,
          email: inputs.email,
          password: inputs.password,
        })
      );
    }
  };
  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <>
      <LoginContainer>
        <TitleSection>
          <BigText>Sign in to Fusemachines</BigText>
        </TitleSection>
        <FormSection>
          <FormInput
            onChangeText={(text) => handleOnchange(text, "email")}
            value={inputs.email}
            onFocus={() => handleError(null, "email")}
            onBlur={() => handleError(null, "email")}
            iconName="email-outline"
            label="Email"
            placeholder="you@example.com"
            autoCompleteType="email"
            returnKeyType="next"
            returnKeyLabel="next"
            error={errors.email}
          />
          <FormInput
            onChangeText={(text) => handleOnchange(text, "password")}
            value={inputs.password}
            onFocus={() => handleError(null, "password")}
            onBlur={() => handleError(null, "password")}
            iconName="lock-outline"
            label="Password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            autoCompleteType="password"
            autoCapitalize="none"
            returnKeyType="go"
            returnKeyLabel="go"
            error={errors.password}
            password
          />
          <RegularButton
            onPressButton={() => validate()}
            title="Log In"
            variant="primary"
          />
        </FormSection>
      </LoginContainer>
      {isLoading && <Loader label="Requesting..." />}
    </>
  );
};

export default Login;
