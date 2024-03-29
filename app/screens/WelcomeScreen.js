import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import color from "../config/color";
import AppText from "../components/Text";
import AppButton from "../components/Button";

function WelcomeScreen(props) {
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require("../assets/background4.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo2.png")} />
          <AppText>Sell what you don't need</AppText>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton title="Login" />
          <AppButton title="Register" buttonColor="second" textColor="black" />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
  // loginButton: {
  //     width: "100%",
  //     height: 70,
  //     backgroundColor: color.primary
  // },
  // registerButton: {
  //     width: "100%",
  //     height: 70,
  //     backgroundColor: color.second

  //     // #f0e4da
  // },
  logo: {
    width: 220,
    height: 100,
    resizeMode: "contain",
  },

  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
});

export default WelcomeScreen;
