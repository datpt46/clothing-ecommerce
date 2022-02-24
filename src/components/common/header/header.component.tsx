import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import avatar from "assets/avatar/samurai.jpg";
import { CartDropdown, CartIcon } from "components/primary";
import * as React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectCartHidden } from "redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { pages, settings, title } from "./header.data";
import BasicMenu from "./menu.component";
import { Search, SearchIconWrapper, StyledInputBase } from "./search.component";

interface MyAppbarMUIProps {
  hidden: boolean;
}

export const MyAppbarMUI: React.FC<MyAppbarMUIProps> = ({ hidden }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              {title}
            </Typography>
          </NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "none" } }}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <>
                {page.isRender && (
                  <Button
                    key={page.id}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                    href={page.path}
                  >
                    {page.name}
                  </Button>
                )}
              </>
            ))}
          </Box>

          {/* Search */}
          <Box sx={{ flexGrow: 0 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </Search>
          </Box>

          {/* --- CartIcon --- */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Cart">
              <IconButton sx={{ p: 0 }}>
                <CartIcon />
              </IconButton>
            </Tooltip>
          </Box>

          {/* Cart Dropdown */}
          {hidden ? null : <CartDropdown />}
          {/* ------- MENU ------ */}
          <BasicMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export const AppbarMUI = connect(mapStateToProps)(MyAppbarMUI);
