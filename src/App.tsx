import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { AppbarMUI as Header, Footer, PrivateRoute } from "components/common";
import routes from "config/routes.config";
import { Route, Switch } from "react-router-dom";

const useStyles = makeStyles({
  body: {
    minHeight: "100vh",
  },
});

const App = (): JSX.Element => {
  // TODO: uncomment to test call API
  const classes = useStyles();
  return (
    <>
      <Header />
      <Box className={classes.body}>
        <Switch>
          {routes.map((route) => {
            const { id, isPrivate, ...otherProps } = route;
            return isPrivate ? (
              <PrivateRoute key={id} {...otherProps} />
            ) : (
              <Route key={id} {...otherProps} />
            );
          })}
        </Switch>
      </Box>
      <Footer />
    </>
  );
};

export default App;
