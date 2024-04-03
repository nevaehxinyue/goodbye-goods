import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import color from "../config/color";

export default function AppButton({ title, onPress, buttonColor='darkGray', textColor="white"}) {
  return (
    <TouchableOpacity style={ [styles.button, {backgroundColor: color[buttonColor]}] } onPress={onPress}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginVertical: 10
  },
  text: {
    color: color.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
