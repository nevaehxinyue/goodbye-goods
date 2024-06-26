import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

function UploadScreen({ onDone, visible = false }) {

    if (!visible) return null;

    return (
      <View style={styles.container}>
        <LottieView
          autoPlay
          loop={false}
          onAnimationFinish={onDone}
          source={require("../assets/animations/done1.json")}
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
      width: 200,
      height:200,
    },
  });

export default UploadScreen;
