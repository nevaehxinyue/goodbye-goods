import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

function LoginScreen(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo2.png")} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        textContentType="emailAddress"
      />
      <AppTextInput 
      autoCapitalize="none"
      autoCorrect={false}
      icon='lock'
      onChangeText={(text) => setPassword(text)}
      placeholder="Password"
      secureTextEntry
      textContentType='password' // Ios will auto fill with its key chain
      />
      <AppButton 
      title="Login"
      onPress={()=>console.log(email, password)}/>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
  logo: {
    width: 220,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
