import React from "react";
import { View } from "react-native";
import color from "../config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  name,
  size = 40,
  backgroundColor = color.black,
  iconColor = color.white,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default Icon;
