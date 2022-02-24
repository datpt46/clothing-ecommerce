import { Box, Container } from "@mui/material";
import { TabCustomized } from "components/common";
import { Login, Register } from "components/primary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
  },
};

const tabData = [
  { id: 0, title: "Login", render: () => <Login /> },
  { id: 1, title: "Register", render: () => <Register /> },
];

export const LoginSignupPage = () => {
  return (
    <Container sx={{ ...styles.container }}>
      <Box style={{ textAlign: "center" }}>
        <ToastContainer autoClose={2000} />
      </Box>
      <TabCustomized tabData={tabData} />
    </Container>
  );
};
