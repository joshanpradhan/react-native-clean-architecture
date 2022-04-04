import React, { FC } from "react";
import styled from "styled-components/native";

import { colors } from "../Theme/colors";
import {TextProps} from "./types"

const StyledText = styled.Text`
  font-size: 15px;
  color: ${colors.grayDark};
  text-align: left;
  font-family:"poppins-semibold";
`;

const RegularText: FC<TextProps> = ({textStyles,children,...props}) => {
  return(
      <StyledText style={textStyles} {...props}>
          {children}
      </StyledText>
  )
};
export default RegularText;
