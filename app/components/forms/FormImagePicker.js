import React from "react";
import { StyleSheet, View } from "react-native";
import ImageInputList from "../ImageInputList";
import { useFormikContext } from "formik";
import { ErrorMessage } from ".";

function FormImagePicker({ name }) {
  const { setFieldValue, values, touched, errors } = useFormikContext();
  const imageUris = values[name];

  const handleAddImage = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemoveImage = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <View>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormImagePicker;
