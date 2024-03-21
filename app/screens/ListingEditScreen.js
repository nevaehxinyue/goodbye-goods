import React from "react";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";
import AppFormPicker from "../components/forms/AppFormPicker";
import { SafeAreaView, View, StyleSheet } from "react-native";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

function ListingEditScreen(props) {
  return (
    <SafeAreaView>
        <View style={styles.container}>
    <AppForm
      initialValues={{
        title: "",
        price: "",
        description: "",
        category: null,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <AppFormField name="title" maxLength={255} placeholder="Title" />
      <AppFormField
      keyboardType='numeric'
      maxLength={8}
      placeholder="Price"
      name='price'
      />
      <AppFormPicker 
      items={categories}
      name='category'
      placeholder="Category"/>

      <AppFormField
      maxLength={255}
      name='description'
      placeholder="Description"
      />
      
      <SubmitButton title="Post"/>
    </AppForm>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
  });
export default ListingEditScreen;
