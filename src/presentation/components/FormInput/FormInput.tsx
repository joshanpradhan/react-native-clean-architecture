import React, { FC, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { colors } from "../Theme/colors";
import RegularText from "../../components/Texts/RegularText";
import SmallText from "../../components/Texts/SmallText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
interface TextInputProps extends RNTextInputProps {
  label: string;
  iconName: string;
  error: string | null;
  password?: any;
  onFocus(): void;
  onBlur(): void;
}
const FormInput: FC<TextInputProps> = ({
  label,
  error,
  iconName,
  password,
  onFocus,
  onBlur,
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  const color = error
    ? colors.danger
    : isFocused
    ? colors.primary
    : colors.gray;
  return (
    <>
      <View style={{ marginBottom: 8 }}>
        <RegularText
          textStyles={{
            color: colors.grayDark,
            fontSize: 14,
            paddingVertical: 4,
          }}
        >
          {label}
        </RegularText>
        <View
          style={[
            styles.inputContainer,
            {
              borderColor: color,
              alignItems: "center",
            },
          ]}
        >
          <MaterialCommunityIcons
            name={iconName}
            style={{ color: colors.primary, fontSize: 22, marginRight: 10 }}
          />
          <TextInput
            autoCorrect={false}
            onFocus={() => {
              onFocus();
              setIsFocused(true);
            }}
            onBlur={() => {
              onBlur();
              setIsFocused(false);
            }}
            secureTextEntry={hidePassword}
            style={{
              fontFamily: "poppins-regular",
              color: colors.grayDark,
              flex: 1,
            }}
            {...props}
          />
          {password && (
            <MaterialCommunityIcons
              onPress={() => setHidePassword(!hidePassword)}
              name={hidePassword ? "eye-outline" : "eye-off-outline"}
              style={{ color: colors.primary, fontSize: 22 }}
            />
          )}
        </View>
        {error && (
          <SmallText textStyles={{ color: colors.danger, paddingVertical: 4 }}>
            {error}
          </SmallText>
        )}
      </View>
    </>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  label: {
    paddingVertical: 5,
    fontSize: 14,
    color: colors.grayDark,
  },
  inputContainer: {
    height: 50,
    borderRadius: 4,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 1,
  },
});
