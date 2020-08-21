import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
const Template = ({ header, children }) => {
  return (
    <Grid spacing="0" direction="column" style={{ paddingTop: "56px" }}>
      <Grid item>{header()}</Grid>
      <Grid item container xs>
        {children}
      </Grid>
    </Grid>
  );
};

export default Template;
