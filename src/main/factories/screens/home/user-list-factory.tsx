import { makeRemoteLoadUserList } from "@main/factories/useCase";
import { Users } from "@presentation/screens";
import React from "react";

export const MakeUserList: React.FC = () => {
  return <Users loadUserList={makeRemoteLoadUserList()} />;
};
