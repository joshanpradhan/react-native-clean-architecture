import React, { FC } from "react";
import {
  TouchableHighlight,
  GestureResponderEvent,
  Animated,
  StyleSheet,
} from "react-native";
import * as Haptics from "expo-haptics";

interface FloatingButtonProps {
  iconComponent: React.ReactNode;
  onPress(): ((event: GestureResponderEvent) => void) | void;
}

const FloatingButton: FC<FloatingButtonProps> = ({
  iconComponent,
  onPress,
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
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };

  const animatedStyle = {
    transform: [{ scale: animatedValue }],
  };
  return (
    <Animated.View style={[styles.touchableOpacityStyle, animatedStyle]}>
      <TouchableHighlight
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={{borderRadius:30}}
        activeOpacity={1}
        onPress={handlePress}
      >
        {iconComponent}
      </TouchableHighlight>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    right: "5%",
    bottom: "2.5%",
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    width: "100%",
    paddingVertical: "6%",
  },
});

export default FloatingButton;
