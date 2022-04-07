import React, { FC, useEffect } from "react";
import styled from "styled-components/native";
import { FloatingButton } from "@presentation/components";
import { AddIcon } from "@presentation/assets/icons";
import { LoadUserList } from "@domain/useCase";
import { UserListItem, ShimmeringListItem } from "./components";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LoggedInStackParams } from "@main/navigators/LoggedInStack";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { userList as fetchUserList } from "./redux/userListAction";

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

const Users: FC<Props> = ({ loadUserList }) => {
  const navigation: NavigationProps = useNavigation();
  const dispatch = useDispatch();
  const { userList, isLoading } = useSelector(
    (state: RootStateOrAny) => state.userList
  );

  useEffect(() => {
    dispatch(fetchUserList({ loadUserList }));
  }, []);
  return (
    <>
      <UsersContainer>
        {isLoading ? <ShimmeringListItem /> : <UserListItem users={userList} />}
      </UsersContainer>
      <FloatingButton
        onPress={() => navigation.navigate("AddUser")}
        iconComponent={<AddIcon />}
      />
    </>
  );
};

export default Users;
