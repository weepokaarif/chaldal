import React, { useState } from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Mail";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useNavigate } from "react-router-dom";

// import { FaBeer } from 'react-icons/fa';

import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Item from "./Item";
import { menu } from "./menuList";
import { makeStyles } from "@mui/styles";

import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";

//! BTN Navigation
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LoginIcon from "@mui/icons-material/Login";
import RestoreIcon from "@mui/icons-material/Restore";
import TranslateIcon from "@mui/icons-material/Translate";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import InboxIcon from "@mui/icons-material/MoveToInbox";

//! Nav component
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));
//*Sidebar
const useStyles = makeStyles((theme) => ({
  // sidebar: {
  //   backgroundColor: theme.palette.orange[600],
  // },
  // button: {
  //   backgroundColor: '#3c52b2',
  //   color: '#fff',
  //   '&:hover': {
  //     backgroundColor: '#fff',
  //     color: '#3c52b2',
  // },
  drawer: {
    width: 200,
  },
  // appBar: {
  //   zIndex: (theme) => theme.zIndex.drawer + 1,
  // },
}));
//! Drawer component

const drawerWidth = 200;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 0),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  // BackgroundColor: orange[500],
}));

//* Sidebar menu list
// const menuData = [
//   {
//     title: "General",
//     icon: <AcUnitIcon />,
//     childrens: [
//       {
//         title: "Home",
//         icon: <AccountBalanceIcon />,
//         path: "/",
//       },
//       {
//         title: "About",
//         icon: <VolunteerActivismIcon />,
//         path: "/about",
//       },
//       {
//         title: "Contact",
//         icon: <LocationOnIcon />,
//         path: "/contact",
//       },
//     ],
//   },
//   {
//     title: "inboox",
//     icon: <InboxIcon />,
//     path: "/",
//   },
//   {
//     title: "Mail",
//     icon: <MailIcon />,
//     path: "/",
//   },
// ];
const Sidebar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  //! Drawer component
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  //? SwipleAble drawer
  const [state, setState] = React.useState({
    // top: false,
    // bottom: false,
    // right: false,
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Box sx={{ lg: { display: "block" } }}>
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <CssBaseline />

          {/*//! Swipeable drawer */}
          <SwipeableDrawer
            open={open}
            onClose={() => setOpen(!open)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <List disablePadding className={classes.drawer}>
              <ListItemButton>
                <ListItemText primary="First Item" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Second Item" />
              </ListItemButton>
            </List>
          </SwipeableDrawer>
          <AppBar position="fixed" open={open} color="warning">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setOpen(!open)}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ marginRight: { md: "1rem" }, fontFamily: "cursive" }}
              >
                Konbiny
              </Typography>
              {/* //! New Search bar */}

              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>

              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {/* <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton> */}
                {/* //! Btn navigation */}
                <Box sx={{ display: "flex", mr: 2 }}>
                  <BottomNavigation
                    sx={{ width: 250, background: "#ED6C02" }}
                    value={value}
                    onChange={handleChange}
                  >
                    <BottomNavigationAction
                      key="language"
                      sx={{ color: "#fff" }}
                      label="Language"
                      value="language"
                      icon={<TranslateIcon />}
                    />

                    {/* 
                    <BottomNavigationAction
                      sx={{
                        color: "#fff",
                      }}
                      label="Location"
                      value="location"
                      icon={<LocationOnIcon />}
                    /> */}

                    <BottomNavigationAction
                      sx={{ color: "#fff" }}
                      label="Login"
                      value="login"
                      icon={<LoginIcon />}
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                    />
                  </BottomNavigation>
                  <Toolbar />
                  <Toolbar />
                </Box>

                {/* <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Typography>Login</Typography>
              </IconButton> */}
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          {/* //* rederoption */}
          {renderMobileMenu}
          {renderMenu}

          <Drawer
            sx={{
              display: { xs: "none", sm: "block" },
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
            ModalProps={{
              keepMounted: false,
            }}
          >
            <DrawerHeader>
              <IconButton onClick={() => setOpen(!open)}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />

            {menu.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </Drawer>

          {/* //!======> nested menu item <====== */}
          <Main open={open}>
            <DrawerHeader />
          </Main>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
