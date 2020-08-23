import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/FilterList";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useRouter } from "next/router";

const Header = ({ headerText, meal, filter, location }) => {
  const router = useRouter();
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Grid
          direction="row"
          container={!!meal}
          alignItems="center"
          spacing={2}
          onClick={() => router.push("/")}
        >
          {meal ? (
            <>
              <Grid item>
                <ArrowBackIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ fontSize: "12px" }}>
                  {headerText}
                </Typography>
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  {meal} in {location}
                </Typography>
              </Grid>
            </>
          ) : (
            <Typography variant="h6" onClick={() => router.push("/")}>
              {headerText}
            </Typography>
          )}
        </Grid>
        <div style={{ flexGrow: 1 }} />
        {filter ? "العربية" : null}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
