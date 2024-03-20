import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup"
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password")
})

function LoginScreen(props) {
   
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo2.png")} />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors, touched, setFieldTouched}) => (
            <>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                placeholder="Email"
                textContentType="emailAddress"
              />
              <ErrorMessage error={errors.email} visible={touched.email}/>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={handleChange("password")}
                placeholder="Password"
                secureTextEntry
                textContentType="password" // Ios will auto fill with its key chain
              />
              <ErrorMessage error={errors.password} visible={touched.password}/>
              <AppButton
                title="Login"
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
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
