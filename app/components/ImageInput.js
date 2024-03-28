import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import color from "../config/color";
import Icon from "./Icon";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ImageInput({ imageUri, onChangeImage }) {
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert(
        "Delete",
        "Are you sure you want to delete this image?",
        [ {
            text: "Yes",
            onPress: () => onChangeImage(null),
          },
          { text: "No" }]
       
      );
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        onChangeImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error reading the image.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={25}
            color={color.mediumGrey}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: color.lightGray,
    justifyContent: "center",
    height: 100,
    overflow: "hidden",
    width: 100,
    borderColor: "red",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
