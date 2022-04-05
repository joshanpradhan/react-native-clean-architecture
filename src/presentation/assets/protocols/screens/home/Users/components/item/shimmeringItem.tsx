import React, { FC } from "react";
import styled from "styled-components/native";
// import { ScreenWidth, Shimmering } from "@presentation/components";
import { ScreenWidth, Shimmering } from "../../../../../../../components";
const ShimmeringContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: white;
`;

const ProfileDetailColumn = styled.View`
  padding-left: 4%;
`;
const width = ScreenWidth * 0.92 - 30;
const ShimmeringItem: FC = () => {
  return (
    <ShimmeringContainer>
      <Shimmering wrapperStyle={{ width: 45, height: 45, borderRadius: 30 }} />
      <ProfileDetailColumn>
        <Shimmering
          wrapperStyle={{
            width: width * 0.3,
            height: 16,
            borderRadius: 5,
          }}
        />
        <Shimmering
          wrapperStyle={{
            width: width * 0.6,
            height: 16,
            borderRadius: 5,
            marginTop: 4,
          }}
        />
      </ProfileDetailColumn>
    </ShimmeringContainer>
  );
};

export default ShimmeringItem;
