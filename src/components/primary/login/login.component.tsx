import { Button, Card, CardContent, CircularProgress, Grid, Typography } from "@mui/material";
import { FormikTextField } from "components/common";
import { Form, Formik } from "formik";
import { connect } from "react-redux";

import { Dispatch } from "redux";
import { loginStart } from "redux/auth/auth.actions";
import { selectLogging } from "redux/auth/auth.selectors";
import { createStructuredSelector } from "reselect";
import * as yup from "yup";

const styles = {
  loginTitle: {
    marginBottom: "20px",
  },
  card: {
    maxWidth: "450px",
    minHeight: "300px",
    display: "flex",
    alignItems: "center",
    "@media screen and (max-width: 900px)": {
      margin: "20px auto",
    },
  },
};

interface MyLoginProps {
  isLogging?: boolean;
  loginStart: (email: string, password: string) => void;
}

interface LoginFormProps {
  username: string;
  password: string;
}

const initialSignupFormValues: LoginFormProps = {
  username: "",
  password: "",
};

const validationSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

export const MyLogin: React.FC<MyLoginProps> = ({ isLogging, loginStart }) => {
  return (
    <Card sx={{ ...styles.card }}>
      <CardContent>
        <Formik
          initialValues={initialSignupFormValues}
          validationSchema={validationSchema}
          onSubmit={({ username, password }) => {
            // alert("Login success");
            loginStart(username, password);
          }}
        >
          {({ values }) => (
            <Form>
              <Typography
                sx={{ ...styles.loginTitle }}
                gutterBottom
                variant="h5"
                textAlign="center"
                component="p"
              >
                Login
              </Typography>
              <Grid container spacing={1}>
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
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    {isLogging && <CircularProgress size={20} color={"secondary"} />} &nbsp; Submit
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

const mapStateToProps = createStructuredSelector({
  isLogging: selectLogging,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loginStart: (username: string, password: string) => dispatch(loginStart({ username, password })),
});

export const Login = connect(mapStateToProps, mapDispatchToProps)(MyLogin);
