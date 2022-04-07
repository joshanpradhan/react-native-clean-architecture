import React, { useEffect } from "react";
import styled from "styled-components/native";
import { LoadUserDetail } from "@domain/useCase";
import { UserDetailContent, ShimmeringContent } from "./components";
import { RootStateOrAny,useSelector, useDispatch } from "react-redux";
import { userDetail as fetchUserDetail } from "./redux/userDetailAction";

const UserDetailContainer = styled.View`
  flex: 1;
  background-color: white;
`;
type Props = {
  loadUserDetail: LoadUserDetail;
};
const UserDetail = ({ loadUserDetail }: Props) => {
  const dispatch = useDispatch();
  const { userDetail, isLoading } = useSelector((state:RootStateOrAny) => state.userDetail);

  useEffect(() => {
    dispatch(fetchUserDetail({ loadUserDetail }));
  }, []);

  return (
    <UserDetailContainer>
      {isLoading ? (
        <ShimmeringContent />
      ) : (
        <UserDetailContent userDetail={userDetail} />
      )}
    </UserDetailContainer>
  );
};

export default UserDetail;
