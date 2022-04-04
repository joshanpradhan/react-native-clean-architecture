import React, { FC } from "react";
import styled from "styled-components/native";

import {RegularText,SmallText} from "@presentation/components";
import { LoadUserList } from "@domain/useCase";
import {LoggedInStackParams} from '@main/navigators/LoggedInStack';


import { useNavigation } from "@react-navigation/native";
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
type NavigationProps = NativeStackScreenProps<LoggedInStackParams, 'UserDetail'>;

type Props = {
  user: LoadUserList.Model;
};
const Image = styled.Image`
  height: 45px;
  width: 45px;
  border-radius: 30px;
`;
const ProfileDetailColumn = styled.View`
  padding-left: 4%;
`;
const UserCardContainer = styled.Pressable`
  flex-direction: row;
  border-radius: 4px;
  background-color: rgb(234, 234, 234);
  padding-horizontal: 10px;
  padding-vertical: 6px;
`;
const UserItem: FC<Props> = ({ user }: Props) => {
  const navigation:NavigationProps = useNavigation();
  return (
    <UserCardContainer
      onPress={() => navigation.navigate("UserDetail", { userId: user.id })}
    >
      <Image source={{ uri:user.avatar }} />
      <ProfileDetailColumn>
        <RegularText textStyles={{ textTransform: "capitalize" }}>
          {user.first_name}
        </RegularText>
        <SmallText textStyles={{ textTransform: "lowercase" }}>
          {user.email}
        </SmallText>
      </ProfileDetailColumn>
    </UserCardContainer>
  );
};

export default UserItem;
