import { TextField } from "@mui/material";
import { FieldAttributes, useField } from "formik";
import React from "react";

interface FormikTextFieldProps {
  label?: string;
  type?: string;
  required?: boolean;
}

export const FormikTextField: React.FC<FormikTextFieldProps & FieldAttributes<{}>> = ({
  label,
  type,
  placeholder,
  required = true,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      type={type}
      required={required}
      helperText={errorText}
      error={!!errorText}
      fullWidth
      {...field}
    />
  );
};
