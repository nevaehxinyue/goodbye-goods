import React, { useState } from "react";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";
import AppFormPicker from "../components/forms/FormPicker";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import UploadScreen from "../components/UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ListingEditScreen(props) {
  const location = useLocation();
  const [ uploadVisible, setUploadVisible ]= useState(false);
  const [ progress, setProgress ] = useState(0);

  const handleSubmit = async (listing) => {
    // console.log("submiting")
    // console.log(listing)
    // console.log(location)
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );
    setUploadVisible(false)

    if (!result.ok) {
      // console.log(result)
      alert("Could not save the listing.");
      return;
    }
    alert("Success!");
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen visible={setUploadVisible} progress={progress} />
      <AppForm
        initialValues={{
          title: "",
          price: 0,
          description: "",
          category: null,
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormImagePicker name="images" />

        <AppFormField name="title" maxLength={255} placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          placeholder="Price"
          name="price"
          width={150}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numOfColumns={3}
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
          width="50%"
        />

        <AppFormField
          maxLength={255}
          name="description"
          placeholder="Description"
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
export default ListingEditScreen;
