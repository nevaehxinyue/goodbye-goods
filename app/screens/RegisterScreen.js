import React, { useState } from "react";
import { AppForm, AppFormField, ErrorMessage } from "../components/forms";
import * as Yup from "yup";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import usersApi from "../api/users";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

function RegisterScreen(props) {
  const [ error, setError ] = useState();
  const [ isError, setIsError ] = useState(false);

  const handleSubmit = async (userInfo, { resetForm}) => {
    const result = await usersApi.register(userInfo);

    if(!result.ok) {
      setIsError(true);
      if(result.data) setError(result.data.error);
      else {
        setError("An unexpected error occured.")
      };
      return null;
    };
    alert("Success!You can log in now.");
    resetForm();


  }
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={isError} />
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
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default RegisterScreen;
