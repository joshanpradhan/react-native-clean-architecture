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
import { User } from "@domain/useCase";
import { LoggedOutStackParams } from "@main/navigators/LoggedOutStack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParams } from "../../../../main/navigators/RootStack";
import { showMessage } from "react-native-flash-message";

type NavigationProps = NativeStackScreenProps<LoggedOutStackParams, "Login">;

// type Props = NativeStackScreenProps<LoggedOutStackParams, "Login">;

const FormContainer = styled(Container)`
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
  user: User;
};

const AddUser: FC<Props> = ({ validation, user }: Props) => {
  const navigation: NavigationProps = useNavigation();
  const [inputs, setInputs] = React.useState({
    name: "",
    job: "",
  });
  const [errors, setErrors] = React.useState({ name: null, job: null });
  const [loading, setLoading] = React.useState(false);
  const validate = () => {
    let isValid = true;
    if (!inputs.name) {
      handleError("Required!", "name");
      isValid = false;
    }
    if (!inputs.job) {
      handleError("Required!", "job");
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
      const response = await user.add({
        name: inputs.name,
        job: inputs.job,
      });
      if (response !== null) {
        setInputs({
          name: "",
          job: "",
        });
        showMessage({
          message: "New user added successfully!",
          type: "success",
        });
      }
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      showMessage({
        message: `${error}`,
        type: "danger",
      });
      setLoading(false);
    }
  };
  return (
    <>
      <FormContainer>
        <FormSection>
          <FormInput
            onChangeText={(text) => handleOnchange(text, "name")}
            value={inputs.name}
            onFocus={() => handleError(null, "name")}
            onBlur={() => handleError(null, "name")}
            iconName="account-circle"
            label="Full name"
            placeholder="John Doe"
            returnKeyType="next"
            returnKeyLabel="next"
            error={errors.name}
          />
          <FormInput
            onChangeText={(text) => handleOnchange(text, "job")}
            value={inputs.job}
            onFocus={() => handleError(null, "job")}
            onBlur={() => handleError(null, "job")}
            iconName="briefcase"
            label="Job"
            placeholder="Associate Software Engineer"
            returnKeyType="next"
            returnKeyLabel="next"
            error={errors.job}
          />
          <RegularButton
            onPressButton={() => validate()}
            title="Add"
            variant="primary"
          />
        </FormSection>
      </FormContainer>
      {loading && <Loader label="Requesting..." />}
    </>
  );
};

export default AddUser;
