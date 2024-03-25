import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../Picker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  name,
  numOfColumns,
  placeholder,
  PickerItemComponent,
  width,
}) {
  const { setFieldValue, touched, values, errors } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numOfColumns={numOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
