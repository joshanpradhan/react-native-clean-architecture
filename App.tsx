import React, { useState } from "react";
import { StyleSheet, View, StatusBar as StatusBarNative } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import FlashMessage from "react-native-flash-message";
import { useNetInfo } from "@react-native-community/netinfo";
import { colors, RegularText } from "@presentation/components";
import store from "@main/store/configureStore";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import RootStack from "@main/navigators/RootStack";

const useFonts = async () =>
  await Font.loadAsync({
    "poppins-regular": require("@presentation/assets/fonts/Poppins-Regular.ttf"),
    "poppins-semibold": require("@presentation/assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-bold": require("@presentation/assets/fonts/Poppins-Bold.ttf"),
  });

export default function App() {
  const netInfo = useNetInfo();
  const [isReady, setIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setIsReady(true)}
        onError={() => console.log("App loading error")}
      />
    );
  }
  const checkStatus = () => {
    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
      return (
        <View style={styles.container}>
          <RegularText textStyles={{ fontSize: 16, color: colors.white }}>
            No internet connection!
          </RegularText>
        </View>
      );
    }
    return (
      <FlashMessage
        position="center"
        icon={"auto"}
        style={styles.flashMessage}
        duration={2000}
      />
    );
  };
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar
          style="dark"
          animated
          networkActivityIndicatorVisible={true}
        />
        <RootStack />
        {checkStatus()}
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    height: 30,
    position: "relative",
    backgroundColor: colors.danger,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    top: StatusBarNative.currentHeight,
  },
  flashMessage: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
