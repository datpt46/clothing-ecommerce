import { FormControlLabel, Radio } from "@mui/material";
import { FieldHookConfig, useField } from "formik";

type FormikRadioProps = { label: string } & FieldHookConfig<{}>;

export const FormikRadio: React.FC<FormikRadioProps> = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel label={label} control={<Radio />} {...field} />;
};
