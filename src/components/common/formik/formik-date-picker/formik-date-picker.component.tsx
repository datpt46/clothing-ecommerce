import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { Field, FieldAttributes } from "formik";
import * as React from "react";

interface FormikDateFieldProps {
  label?: string;
  name?: string;
  required?: boolean;
  fullWidth?: boolean;
}

export const FormikDatePicker: React.FC<FormikDateFieldProps & FieldAttributes<{}>> = ({
  label,
  required = true,
  fullWidth = true,
  name,
  ...otherProps
}: any) => {
  const [value, setValue] = React.useState<Date | null>(null);
  return (
    <Field>
      {({ form: { setFieldValue } }: any) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label={label}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              setFieldValue(name, newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} {...otherProps} required={required} fullWidth={fullWidth} />
            )}
          />
        </LocalizationProvider>
      )}
    </Field>
  );
};
