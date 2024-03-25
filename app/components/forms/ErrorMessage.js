import React from "react";
import AppText from "../Text";
import { StyleSheet } from "react-native";

function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;
