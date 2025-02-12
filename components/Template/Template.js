import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
const Template = ({ header, children, paddingTop = 56 }) => {
  return (
    <Grid
      spacing="0"
      direction="column"
      style={{ paddingTop: `${paddingTop}px` }}
    >
      {header ? <Grid item>{header()}</Grid> : null}
      <Grid item container xs>
        {children}
      </Grid>
    </Grid>
  );
};

export default Template;
