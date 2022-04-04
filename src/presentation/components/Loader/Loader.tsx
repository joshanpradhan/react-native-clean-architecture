import React, { FC } from "react";
import {  Modal, ActivityIndicator } from "react-native";
import { colors } from "../Theme/colors";
import { ScreenWidth } from "../Theme/shared";
import SmallText from "./../Texts/SmallText";
import styled from "styled-components/native";

const LoaderOuterContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(52, 52, 52, 0.8);
`;

const LoaderInnerContainer = styled.View`
  flex-direction: row;
  border-radius: 2px;
  background-color: ${colors.white};
  padding: 14px 20px;
`;
type Props = {
  label: string;
};
const Loader: FC<Props> = ({ label }) => {
  return (
      <Modal visible={true} transparent={true} statusBarTranslucent={true}>
        <LoaderOuterContainer>
          <LoaderInnerContainer style={{ width: ScreenWidth - 50 }}>
            <ActivityIndicator size="large" color={colors.primary} />
            <SmallText
              textStyles={{
                fontSize: 16,
                fontWeight: "500",
                margin: 10,
              }}
            >
              {label}
            </SmallText>
          </LoaderInnerContainer>
        </LoaderOuterContainer>
      </Modal>
  );
};

export default Loader;
