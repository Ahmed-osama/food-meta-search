import React, { useEffect, useState } from "react";
import {
  Paper,
  Grid,
  Button,
  Typography,
  Divider,
  Box,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
const MealListItem = ({ meal_name, price, meal_image, stars }) => {
  return (
    <>
      <Paper elevation={0} variant="square">
        <Grid
          direction="row"
          container
          wrap="nowrap"
          spacing={2}
          style={{ margin: 0 }}
          xs
        >
          <Grid item>
            <img src={meal_image} alt={meal_name} width="100" height="100" />
          </Grid>
          <Grid
            item
            xs
            zeroMinWidth
            grow
            direction="column"
            container
            style={{ flexGrow: 1 }}
          >
            <Typography variant="subtitle2" noWrap>
              {meal_name}
            </Typography>
            <Rating name="size-small" defaultValue={stars} size="small" />
          </Grid>
          <Grid
            item
            xs
            zeroMinWidth
            style={{ maxWidth: "100px" }}
            direction="column"
            justify="space-between"
            alignItems="center"
            container
          >
            <Grid
              item
              xs
              direction="column"
              alignItems="center"
              container
              style={{ marginTop: "10px" }}
            >
              <Typography noWrap variant="h6">
                {price}
              </Typography>
              <Typography noWrap variant="body2">
                AED
              </Typography>
            </Grid>
            <Button
              variant="outlined"
              color="primary"
              style={{ marginTop: "auto" }}
              size="small"
            >
              View
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Divider />
    </>
  );
};

export default MealListItem;
