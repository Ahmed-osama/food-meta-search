import React from "react";
import _random from "lodash/random";
import {
  Paper,
  Grid,
  Button,
  Typography,
  Divider,
  Box,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";
const MealListItem = ({
  meal_name,
  price,
  meal_image,
  stars,
  brand_logo,
  meal_description,
  reviews_count,
}) => {
  const router = useRouter();

  const theme = useTheme();
  return (
    <>
      <Paper
        elevation={0}
        variant="square"
        style={{ marginBottom: "5px", marginTop: "5px" }}
      >
        <Grid
          direction="row"
          container
          wrap="nowrap"
          spacing={2}
          style={{ margin: 0 }}
          xs
        >
          <Grid item>
            <img src={meal_image} alt={meal_name} width="80" height="80" />
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
            <Typography
              variant="subtitle1"
              noWrap
              style={{
                fontWeight: "bold",
                color: theme.palette.grey[800],
              }}
            >
              {meal_name}
            </Typography>
            <Typography
              variant="body2"
              noWrap
              style={{ marginBottom: "5px", color: theme.palette.grey[700] }}
            >
              {meal_description}
            </Typography>
            <Grid item container spacing={1}>
              <Rating
                name="size-small"
                defaultValue={stars}
                size="small"
                className="MuiGrid-item"
              />

              <Typography
                variant="body2"
                noWrap
                style={{ color: theme.palette.grey[700] }}
                className="MuiGrid-item"
              >
                ({reviews_count}) reviews
              </Typography>
            </Grid>
            <img
              src={`./logos/${brand_logo}.png`}
              alt=""
              style={{ maxHeight: "20px", maxWidth: "90px", marginTop: "10px" }}
            />
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
              onClick={() => router.push("/redirection")}
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
