import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/FilterList";
import { useRouter } from "next/router";

const Header = ({ headerText, meal, filter }) => {
  const router = useRouter();
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Grid>
          {meal ? (
            <>
              <Typography
                variant="body2"
                onClick={() => router.push("/")}
                style={{ fontSize: "12px" }}
              >
                {headerText}
              </Typography>
              <Typography
                variant="body1"
                onClick={() => router.push("/")}
                style={{ fontWeight: "bold" }}
              >
                {meal}
              </Typography>
            </>
          ) : (
            <Typography variant="h6" onClick={() => router.push("/")}>
              {headerText}
            </Typography>
          )}
        </Grid>
        <div style={{ flexGrow: 1 }} />
        {filter ? (
          <IconButton edge="end" color="inherit">
            <MenuIcon />
          </IconButton>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
