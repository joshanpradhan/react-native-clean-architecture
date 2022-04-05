import React from "react";
import styled from "styled-components/native";
// import { UserIcon, EmailIcon } from "@presentation/assets/icons";
// import { RegularText, SmallText } from "@presentation/components";
// import { LoadUserDetail } from "@domain/useCase";
import { UserIcon, EmailIcon } from "../../../../../icons";
import { RegularText, SmallText } from "../../../../../../components";
import { LoadUserDetail } from "../../../../../../../domain/useCase";
const ImageContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding-top: 4%;
  padding-bottom: 8%;
`;
const Image = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 60px;
`;
const ProfileDetailRow = styled.View`
  flex-direction: row;
  padding-horizontal: 4%;
  padding-vertical: 2%;
  justify-content: space-between;
`;
const ProfileDetailLeftRow = styled.View`
  flex-direction: row;
`;

type Props = {
  userDetail: LoadUserDetail.Model;
};
const UserDetailContent = ({ userDetail }: Props) => {
  return (
    <>
      <ImageContainer>
        <Image source={{ uri: userDetail.avatar }} />
      </ImageContainer>

      <ProfileDetailRow>
        <ProfileDetailLeftRow>
          <UserIcon />
          <RegularText textStyles={{ fontSize: 14, paddingLeft: 20 }}>
            Name
          </RegularText>
        </ProfileDetailLeftRow>
        <SmallText textStyles={{ fontSize: 14, textTransform: "capitalize" }}>
          {userDetail.first_name}
        </SmallText>
      </ProfileDetailRow>

      <ProfileDetailRow>
        <ProfileDetailLeftRow>
          <EmailIcon />
          <RegularText textStyles={{ fontSize: 14, paddingLeft: 20 }}>
            Email
          </RegularText>
        </ProfileDetailLeftRow>
        <SmallText textStyles={{ fontSize: 14 }}>{userDetail.email}</SmallText>
      </ProfileDetailRow>
    </>
  );
};

export default UserDetailContent;
