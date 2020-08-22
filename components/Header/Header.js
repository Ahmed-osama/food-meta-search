import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/More";
import { useRouter } from "next/router";

const Header = ({ headerText }) => {
  const router = useRouter();
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" onClick={() => router.push("/")}>
          {headerText}
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <IconButton edge="end" color="inherit">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
