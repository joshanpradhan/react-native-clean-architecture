import React, { FC, useEffect, useState } from "react";
import styled from "styled-components/native";
import { FloatingButton } from "@presentation/components";
import { AddIcon } from "@presentation/assets/icons";
import { LoadUserList } from "@domain/useCase";
import { UserListItem, ShimmeringListItem } from "./components";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LoggedInStackParams } from "@main/navigators/LoggedInStack";

type NavigationProps = NativeStackScreenProps<LoggedInStackParams, "AddUser">;

type Props = {
  loadUserList: LoadUserList;
};
const UsersContainer = styled.View`
  flex: 1;
  padding-horizontal: 4%;
  padding-top: 2%;
  background-color: white;
`;

const Users: FC<Props> = ({ loadUserList }: Props) => {
  const navigation: NavigationProps = useNavigation();
  const [loadingUsersList, setLoadingUsersList] = useState(true);
  const [users, setUsers] = useState<any[]>([]);
  const handleChange = (users) => {
    setUsers(users.data);
    setLoadingUsersList(false);
  };
  useEffect(() => {
    loadUserList
      .loadAll()
      .then((users) => handleChange(users))
      .catch((error) => {
        showMessage({
          message: `${error}`,
          type: "danger",
        });
        setLoadingUsersList(false);
      });
  }, []);
  return (
    <>
      <UsersContainer>
        {loadingUsersList ? (
          <ShimmeringListItem />
        ) : (
          <UserListItem users={users} />
        )}
      </UsersContainer>
      <FloatingButton
        onPress={() => navigation.navigate("AddUser")}
        iconComponent={<AddIcon />}
      />
    </>
  );
};

export default Users;
