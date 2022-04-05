import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

// import { LoadUserDetail } from "@domain/useCase";
// import {
//   UserDetailContent,
//   ShimmeringContent,
// } from "@presentation/screens/home/UserDetail/components";

import { LoadUserDetail } from "../../../../../../domain/useCase";
import {
  UserDetailContent,
  ShimmeringContent,
} from "./components";

import { showMessage } from "react-native-flash-message";

const UserDetailContainer = styled.View`
  flex: 1;
  background-color: white;
`;
type Props = {
  loadUserDetail: LoadUserDetail;
};
const UserDetail = ({ loadUserDetail }: Props) => {
  const [loadingUserDetail, setLoadingUserDetail] = useState(true);
  const [userDetail, setUserDetail] = useState<any>({});
  const handleSuccess = (user) => {
    setUserDetail(user.data);
    setLoadingUserDetail(false);
  };
  useEffect(() => {
    loadUserDetail
      .load()
      .then((user) => handleSuccess(user))
      .catch((error) => {
        showMessage({
          message: `${error}`,
          type: "danger",
        });
        setLoadingUserDetail(false);
      });
  }, []);

  return (
    <UserDetailContainer>
      {loadingUserDetail ? (
        <ShimmeringContent />
      ) : (
        <UserDetailContent userDetail={userDetail} />
      )}
    </UserDetailContainer>
  );
};

export default UserDetail;
