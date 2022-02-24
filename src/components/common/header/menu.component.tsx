import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "provider";
import * as React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Dispatch } from "redux";
import { logout } from "redux/auth/auth.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsloggedIn, selectCurrentUser } from "redux/auth/auth.selectors";
import { User } from "models";

interface BasicMenuProps {
  isLoggedIn: boolean;
  currentUser?: User;
  logout: () => void;
}

const BasicMenu: React.FC<BasicMenuProps> = ({ currentUser, isLoggedIn, logout }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();

  // darkmode
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  // login
  const handleLogin = () => {
    history.push("/login");
  };

  // logout
  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Button style={{ color: "white" }} onClick={handleLogin}>
          Login
        </Button>
      ) : (
        <>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{ color: "white" }}
          >
            {currentUser?.username}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              {/* -- Dark Mode -- */}
              <Box onClick={colorMode.toggleColorMode} sx={{ flexGrow: 0 }}>
                Dark mode
              </Box>
            </MenuItem>
            {/* -- Profile -- */}
            <MenuItem onClick={handleClose}>Account</MenuItem>
            {/* -- Logout -- */}
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn: selectIsloggedIn,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicMenu);
