import React, { useState } from "react";
import { AppForm, AppFormField, ErrorMessage } from "../components/forms";
import * as Yup from "yup";
import { StyleSheet } from "react-native";
import { SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import usersApi from "../api/users";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import authApi from '../api/auth';
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

function RegisterScreen(props) {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const { logIn } = useAuth();

  const [ registerError, setRegisterError ] = useState();

  const handleSubmit = async (userInfo, { resetForm}) => {
    // Firstly, register a user
    const result = await registerApi.request(userInfo);
    if(!result.ok) {
      if(result.data) setRegisterError(result.data.error);
      else {
        setRegisterError("An unexpected error occured.")
      };
      return null;
    };
    //Secondly login the user and store the authToken on back end
    const { data: authToken } = await loginApi.request(userInfo.email, userInfo.password);
    if(authToken){
      logIn(authToken);
    } else {
      setRegisterError("Cannot store the authToken")
    }
    
    resetForm();

  }
  return (
    <>
    <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={registerError} visible={registerApi.error} />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Username"
        />

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
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default RegisterScreen;
