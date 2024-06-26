import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton, ErrorMessage } from "../components/forms";
import Screen from "../components/Screen";
import authApi from "../api/auth";
import "core-js/stable/atob";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

function LoginScreen(props) {
const { user, logIn } = useAuth();
  const [ loginFailed, setLoginFailed ] = useState(false);
  const handleSubmit = async ({ email, password}) => {
    const result = await authApi.login(email, password);
    if(!result.ok) {
      setLoginFailed(true);
    } else{
      //  console.log(`result.data: ${result.data}`)
      setLoginFailed(false);
      logIn(result.data); 
    }

  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo2.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email and/or password" visible={loginFailed} />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password" // Ios will auto fill with its key chain
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
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
