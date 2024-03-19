import React from 'react'
import { Text, StyleSheet } from 'react-native'
import defaultStyles from "../config/styles"

export default function AppText({children, style}) {
  return (
   <Text style={[defaultStyles.text, style]}>{children}</Text>
  )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: "Avenir"
    }
})
