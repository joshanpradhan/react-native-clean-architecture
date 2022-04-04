import React, { FC } from "react";
import {
  MakeLogin,
  MakeUserList,
  MakeUserDetail,
  MakeAddUser
} from "@main/factories/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LoggedInStack from "./LoggedInStack";
// import LoggedOutStack from "./LoggedOutStack";
export type RootStackParams = {
  Login: undefined;
  Users: undefined;
  UserDetail: { userId: string };
  AddUser:undefined;
};
const Stack = createNativeStackNavigator<RootStackParams>();
const RootStack: FC = () => {
  return (
    <NavigationContainer>
      {/* {(API.token()!=null ? (
        <LoggedInStack />
      ) : (
        <LoggedOutStack />
      )} 
         <LoggedOutStack /> */}

      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleStyle: {
            fontFamily: "poppins-semibold",
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={MakeLogin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Users" component={MakeUserList} />
        <Stack.Screen
          name="UserDetail"
          component={MakeUserDetail}
          options={{
            headerTitle: "User Detail",
          }}
        />
         <Stack.Screen
          name="AddUser"
          component={MakeAddUser}
          options={{
            headerTitle: "Add new user",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootStack;
