import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import { FieldHookConfig, useField } from "formik";
import React from "react";

type FormikCheckboxProps = {
  label?: string;
} & FieldHookConfig<{}>;

export const FormikCheckbox: React.FC<FormikCheckboxProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <FormGroup>
      <FormControlLabel label={label ? label : ""} {...field} control={<Checkbox />} />
      <FormHelperText>
        <span style={{ color: "#d32f2f" }}>{errorText}</span>
      </FormHelperText>
    </FormGroup>
  );
};
