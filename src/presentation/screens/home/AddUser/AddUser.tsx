import React, { FC } from "react";
import styled from "styled-components/native";
//custom components
import {
  Container,
  FormInput,
  RegularButton,
  Loader,
} from "@presentation/components";
import { Validation } from "@presentation/protocols";
import { User } from "@domain/useCase";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { addUser } from "./redux/addUserAction";

const FormContainer = styled(Container)`
  padding-horizontal: 6%;
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
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootStateOrAny) => state.addUser);

  const [inputs, setInputs] = React.useState({
    name: "",
    job: "",
  });
  const [errors, setErrors] = React.useState({ name: null, job: null });
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
      dispatch(
        addUser({
          user: user,
          name: inputs.name,
          job: inputs.job,
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
      {isLoading && <Loader label="Requesting..." />}
    </>
  );
};

export default AddUser;
