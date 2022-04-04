import { makeRemoteLoadUserDetail } from "@main/factories/useCase";
import { UserDetail } from "@presentation/screens";
import { RootStackParams } from "@main/navigators/RootStack";
import type { RouteProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import React from "react";
type Props = RouteProp<RootStackParams, "UserDetail">;
export const MakeUserDetail = () => {
  const route = useRoute<Props>();
  return (
    <UserDetail
      loadUserDetail={makeRemoteLoadUserDetail(route.params.userId)}
    />
  );
};
