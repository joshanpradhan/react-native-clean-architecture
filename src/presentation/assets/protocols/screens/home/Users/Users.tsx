import React, { FC, useEffect, useState } from "react";
import styled from "styled-components/native";
// import { FloatingButton } from "@presentation/components";
// import { AddIcon } from "@presentation/assets/icons";
// import { LoadUserList } from "@domain/useCase";
// import {
//   UserListItem,
//   ShimmeringListItem,
// } from "@presentation/screens/home/Users/components";
import { FloatingButton } from "../../../../../components";
import { AddIcon } from "../../../../icons";
import { LoadUserList } from "../../../../../../domain/useCase";
import {
  UserListItem,
  ShimmeringListItem,
} from "./components";
import { showMessage } from "react-native-flash-message";

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
        onPress={() => console.log("Floating button clicked")}
        iconComponent={<AddIcon />}
      />
    </>
  );
};

export default Users;
