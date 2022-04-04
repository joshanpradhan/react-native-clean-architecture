import { makeRemoteAuthentication } from "@main/factories/useCase";
import { makeLoginValidation } from "@main/factories/validation";
import { Login } from "@presentation/screens";
import React from "react";

export const MakeLogin: React.FC = () => {
  return (
    <Login
      validation={makeLoginValidation()}
      authentication={makeRemoteAuthentication()}
    />
  );
};
