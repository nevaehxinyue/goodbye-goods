import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
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
  overlay: {
    backgroundColor: 'white',
    opacity: 0.8,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent:'center',
    alignItems: 'center',
    zIndex: 1,
  },
  indicator: {
    width: 150,
    height: 150,
  },
});

export default ActivityIndicator;
