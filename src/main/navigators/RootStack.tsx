import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import LoggedInStack from "./LoggedInStack";
import LoggedOutStack from "./LoggedOutStack";

const RootStack: FC = () => {
  const { userToken } = useSelector((state) => state.login);
  return (
    <NavigationContainer>
      {userToken !== null ? <LoggedInStack /> : <LoggedOutStack />}
    </NavigationContainer>
  );
};
export default RootStack;
