import React, { FC } from "react";
import styled from "styled-components/native";
// import { Shimmering, ScreenWidth } from "@presentation/components";
import { Shimmering, ScreenWidth } from "../../../../../../components";

const width = ScreenWidth * 0.92 - 30;

const ImageContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding-top: 4%;
  padding-bottom: 8%;
`;
const ProfileDetailRow = styled.View`
  flex-direction: row;
  padding-horizontal: 4%;
  padding-vertical: 2%;
  justify-content: space-between;
`;
const ShimmeringContent: FC = () => {
  return (
    <>
      <ImageContainer>
        <Shimmering
          wrapperStyle={{ height: 120, width: 120, borderRadius: 60 }}
        />
      </ImageContainer>
      <ProfileDetailRow>
        <Shimmering
          wrapperStyle={{
            width: width * 0.3,
            height: 30,
            borderRadius: 5,
          }}
        />
        <Shimmering
          wrapperStyle={{
            width: width * 0.7,
            height: 30,
            borderRadius: 5,
          }}
        />
      </ProfileDetailRow>
      <ProfileDetailRow>
        <Shimmering
          wrapperStyle={{
            width: width * 0.3,
            height: 25,
            borderRadius: 5,
          }}
        />
        <Shimmering
          wrapperStyle={{
            width: width * 0.7,
            height: 25,
            borderRadius: 5,
          }}
        />
      </ProfileDetailRow>
    </>
  );
};

export default ShimmeringContent;
