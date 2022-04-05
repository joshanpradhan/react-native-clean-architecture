import React, { FC } from "react";
import styled from "styled-components/native";
//custom components
// import {
//   Container,
//   BigText,
//   FormInput,
//   RegularButton,
//   Loader,
// } from "@presentation/components";
// import { Validation } from "@presentation/protocols";
// import { Authentication } from "@domain/useCase";
// import { LoggedOutStackParams } from "@main/navigators/LoggedOutStack";

import {
  Container,
  BigText,
  FormInput,
  RegularButton,
  Loader,
} from "../../../../../components";
import { Validation } from "../../..";
import { Authentication } from "../../../../../../domain/useCase";
import { LoggedOutStackParams } from "../../../../../../main/navigators/LoggedOutStack";


import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParams } from "../../../../main/navigators/RootStack";
import { showMessage } from "react-native-flash-message";

type NavigationProps = NativeStackScreenProps<LoggedOutStackParams, "Login">;

// type Props = NativeStackScreenProps<LoggedOutStackParams, "Login">;

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
  const navigation: NavigationProps = useNavigation();
  const [inputs, setInputs] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({ email: null, password: null });
  const [loading, setLoading] = React.useState(false);
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
      handleSubmit();
    }
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const handleSubmit = async (): Promise<void> => {
    try {
      setLoading(true);
      const account = await authentication.auth({
        email: inputs.email,
        password: inputs.password,
      });
      if (account.token) {
        navigation.navigate("Users");
        showMessage({
          message: "Logged in successfully!",
          type: "success",
        });
      }
      setLoading(false);
    } catch (error) {
      showMessage({
        message: `${error}`,
        type: "danger",
      });
      setLoading(false);
    }
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
      {loading && <Loader label="Requesting..." />}
    </>
  );
};

export default Login;
