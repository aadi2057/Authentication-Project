import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Box,
  Button,
} from "@material-ui/core";
import {
  MenuOutlined,
  AccountCircle,
  ExitToAppOutlined,
} from "@material-ui/icons";
import { Link, Redirect } from "react-router-dom";

interface User {
  name: string;
  email: String;
  password: string;
}
interface Props {}
const Header: React.FC<Props> = ({}) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState("");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    alert("Are you sure you want to Logout?");
    localStorage.removeItem("authenticated");
    // localStorage.removeItem("User");
    setAuth(false);

    <Redirect to="/" />;
    // history.push("/");
  };
  useEffect(() => {
    if (localStorage.getItem("authenticated")) {
      setAuth(true);
    }
    if (localStorage.getItem("User")) {
      // setAuth(true);
      var User: User = JSON.parse(localStorage.getItem("User") || "{}");
      setUser(User.name);
    }
    window.addEventListener("storage", () => {
      if (localStorage.getItem("authenticated")) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  }, []);

  //   const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuOutlined />
          </IconButton>
          <Link style={{ textDecoration: "none" }} to="/">
            <Typography style={{ color: "black" }} variant="h6">
              Authentication Project
            </Typography>
          </Link>

          {auth ? (
            <Box
              display="flex"
              style={{ marginLeft: "65%" }}
              flexDirection="row-reverse"
              p={1}
              m={1}
            >
              <Button
                color="inherit"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
                startIcon={<AccountCircle />}
              >
                {" "}
                <Typography
                  style={{ color: "black", textTransform: "capitalize" }}
                  variant="h6"
                >
                  {user}
                </Typography>
              </Button>{" "}
              <Menu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                id="menu-appbar"
                keepMounted
              >
                <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </Menu>
            </Box>
          ) : (
            <div style={{ marginLeft: "70%" }}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button startIcon={<ExitToAppOutlined />}>Login</Button>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
