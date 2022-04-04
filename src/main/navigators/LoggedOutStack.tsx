import React, { FC } from "react";
import { MakeLogin } from "@main/factories/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export type LoggedOutStackParams = {
  Login: undefined;
};
const LoggedOut = createNativeStackNavigator<LoggedOutStackParams>();
const LoggedOutStack: FC = () => {
  return (
    <LoggedOut.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "poppins-semibold",
        },
      }}
    >
      <LoggedOut.Screen
        name="Login"
        component={MakeLogin}
        options={{
          headerShown: false,
        }}
      />
      
    </LoggedOut.Navigator>
  );
};
export default LoggedOutStack;
