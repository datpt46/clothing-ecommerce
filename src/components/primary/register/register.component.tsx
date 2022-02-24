import { Box, Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { FormikCheckbox, FormikTextField } from "components/common";
import { Form, Formik } from "formik";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { registerStart } from "redux/auth/auth.actions";
import * as yup from "yup";

const styles = {
  card: {
    maxWidth: "450px",
    "@media screen and (max-width: 900px)": {
      margin: "20px auto",
    },
  },
  textHelper: {
    marginBottom: "20px",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
  },
};

interface SignUpFormProps {
  // firstname: string;
  // lastname: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  // address: "";
  // dob: string;
  readPolicy: boolean;
}

const initialSignupFormValues: SignUpFormProps = {
  // firstname: "",
  // lastname: "",
  username: "",
  password: "",
  email: "",
  phone: "",
  // address: "",
  // dob: "",
  readPolicy: false,
};

/**
 * https://stackoverflow.com/questions/52483260/validate-phone-number-with-yup
 */
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  // firstname: yup.string().required(),
  // lastname: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().email("Please enter valid email").required(),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid").required(),
  // address: yup.string(),
  // dob: yup.date(),
  readPolicy: yup.boolean().oneOf([true], "Please read and accept the policy"),
});

interface MyRegisterProps {
  registerStart: (username: string, password: string, email: string, phone: string) => void;
}

export const MyRegister: React.FC<MyRegisterProps> = ({ registerStart }) => {
  // media queries
  return (
    <Card sx={{ ...styles.card }}>
      <CardContent>
        <Formik
          initialValues={initialSignupFormValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const { username, password, email, phone } = values;
            registerStart(username, password, email, phone);
          }}
        >
          {({ values }) => (
            <Form>
              <Typography gutterBottom variant="h5" textAlign="center" component="p">
                Register
              </Typography>
              <Typography
                sx={{ ...styles.textHelper }}
                variant="body2"
                color="textSecondary"
                textAlign="center"
                component="p"
                gutterBottom
              >
                Fill necessary information for signup below
              </Typography>
              <Grid container spacing={1}>
                {/* <Grid xs={12} sm={6} item>
                  <FormikTextField
                    placeholder="Enter first name"
                    label="First Name"
                    name="firstname"
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <FormikTextField
                    placeholder="Enter last name"
                    label="Last Name"
                    name="lastname"
                  />
                </Grid> */}
                <Grid xs={12} item>
                  <FormikTextField
                    placeholder="Enter user name"
                    label="User Name"
                    name="username"
                  />
                </Grid>
                <Grid xs={12} item>
                  <FormikTextField
                    placeholder="Enter password"
                    label="Password"
                    name="password"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField
                    placeholder="Enter email"
                    label="Email"
                    name="email"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikTextField placeholder="Enter phone number" label="Phone" name="phone" />
                </Grid>
                {/* <Grid item xs={12}>
                  <FormikTextField
                    placeholder="Enter address"
                    label="Address"
                    name="address"
                    required={false}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormikDatePicker label="DOB" name="dob" required={false} />
                </Grid> */}
                <Grid item xs={12}>
                  <Box style={{ ...styles.checkboxContainer }}>
                    <FormikCheckbox
                      label="I have read and agree with term of policy"
                      name="readPolicy"
                      type="checkbox"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                  </Button>
                </Grid>
                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              </Grid>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  registerStart: (username: string, password: string, email: string, phone: string) =>
    dispatch(registerStart({ username, password, email, phone })),
});

export const Register = connect(null, mapDispatchToProps)(MyRegister);
