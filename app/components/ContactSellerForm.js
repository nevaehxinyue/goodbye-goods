import React from "react";
import { Keyboard, Alert } from "react-native";
import { AppForm, AppFormField, SubmitButton } from "./forms";
import messagesApi from "../api/messages";
import * as Yup from "yup";

function ContactSellerForm({ listing }) {
    const handleSubmit = async ({ message }, { resetForm }) => {
      Keyboard.dismiss();
  
      const result = await messagesApi.send(message, listing.id);
      console.log(result)
  
      if (!result.ok) {
        return Alert.alert("Error", "Could not send the message to the seller.");
      }
      alert("Message sent successfully!")
  
      resetForm();
    };

  return (
    <AppForm
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        name="message"
        maxLenght={255}
        multiline
        numberofLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="Contact Seller" />
    </AppForm>
  );
}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

export default ContactSellerForm;
