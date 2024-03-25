import React from "react";
import AppButton from "../Button";
import { FormikContext, useFormikContext } from "formik";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
