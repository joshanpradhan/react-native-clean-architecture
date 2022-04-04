import { makeRemoteAddUser } from "@main/factories/useCase";
import { makeLoginValidation } from "@main/factories/validation";
import { AddUser } from "@presentation/screens";
import React from "react";

export const MakeAddUser: React.FC = () => {
  return (
    <AddUser validation={makeLoginValidation()} user={makeRemoteAddUser()} />
  );
};
