import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
        style={styles.indicator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    width: 150,
    height: 150,
  },
});

export default ActivityIndicator;
