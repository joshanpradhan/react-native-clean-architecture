import React, { FC } from "react";
import styled from "styled-components/native";

//colors
import { colors } from "../Theme/colors";

//types
import { TextProps } from "./types";

const StyledText = styled.Text`
  font-size: 13px;
  color: ${colors.grayDark};
  text-align: left;
  font-family: "poppins-regular";
`;

const SmallText: FC<TextProps> = ({ textStyles, children, ...props }) => {
  return (
    <StyledText style={textStyles} {...props}>
      {children}
    </StyledText>
  );
};
export default SmallText;
