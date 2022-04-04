import React, { FC } from "react";
import { MakeUserList, MakeUserDetail,MakeAddUser } from "@main/factories/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export type LoggedInStackParams = {
  Users: undefined;
  UserDetail: { userId: string };
  AddUser:undefined;
};
const LoggedIn = createNativeStackNavigator<LoggedInStackParams>();
const LoggedInStack: FC = () => {
  return (
    <LoggedIn.Navigator
      initialRouteName="Users"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "poppins-semibold",
        },
      }}
    >
      <LoggedIn.Screen name="Users" component={MakeUserList} />
      <LoggedIn.Screen
        name="UserDetail"
        component={MakeUserDetail}
        options={{
          headerTitle: "User Detail",
        }}
      />
      <LoggedIn.Screen name="AddUser" component={MakeAddUser} />

    </LoggedIn.Navigator>
  );
};
export default LoggedInStack;
