import React, { FC } from "react";
import {
  TouchableHighlight,
  GestureResponderEvent,
  View,
  Animated,
  StyleSheet,
} from "react-native";
import * as Haptics from "expo-haptics";
import { colors } from "../Theme/colors";
import RegularText from "../Texts/RegularText";

interface CBButtonProps {
  variant?: "default" | "primary";
  title: string;
  disabled?: boolean;
  onPressButton(): ((event: GestureResponderEvent) => void) | void;
}

const RegularButton: FC<CBButtonProps> = ({
  title,
  variant,
  disabled,
  onPressButton,
}) => {
  const animatedValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    onPressButton();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const animatedStyle = {
    transform: [{ scale: animatedValue }],
  };
  return (
    <Animated.View style={[styles.btnContainer, animatedStyle]}>
      <TouchableHighlight
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={{ borderRadius: 4 }}
        activeOpacity={0.9}
        onPress={handlePress}
        disabled={disabled}
      >
        <View
          style={[
            styles.btn,
            {
              backgroundColor:variant === "primary" ? colors.primary : colors.white,
              borderColor: variant === "primary" ? colors.primary : colors.gray,
              borderWidth: variant === "primary" ? 0 : 1,
            },
          ]}
        >
          <RegularText textStyles={{ color: variant === "primary" ? colors.white : colors.grayDark}}>{title}</RegularText>
        </View>
      </TouchableHighlight>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: "100%",
    paddingVertical:"6%",
  },
  btn: {
    width: "100%",
    paddingVertical:"4%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
});

export default RegularButton;
