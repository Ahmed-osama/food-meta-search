import React from "react";
import _random from "lodash/random";
import { Paper, Grid, Button, Typography, Divider } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";

const MealListItem = ({
  meal_name,
  price,
  meal_image,
  stars,
  brand,
  brand_logo,
  meal_description,
  reviews_count,
  final_price,
  index,
}) => {
  const router = useRouter();
  const theme = useTheme();
  const discount = Math.abs(Math.round(((price - final_price) / price) * 100));
  const isBestDeal = index === 0;

  return (
    <>
      <Paper
        elevation={0}
        variant="square"
        style={{ marginBottom: "5px", marginTop: "5px", position: "relative" }}
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
              {discount ? (
                <span
                  style={{
                    padding: "2px 5px",
                    borderRadius: "2px 0 0 2px",
                    background: theme.palette.error.dark,
                    fontSize: "12px",
                    color: "white",
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    marginBottom: "5px",
                    minWidth: "30px",
                    top: "10px",
                    right: "0px",
                    textAlign: "center",
                  }}
                >
                  {discount}%
                </span>
              ) : null}
              <Typography
                noWrap
                variant="h6"
                style={{
                  lineHeight: "20px",
                  color: isBestDeal ? theme.palette.success.dark : "black",
                }}
              >
                {price}
              </Typography>
              <Typography
                noWrap
                variant="body2"
                style={{
                  fontSize: "12",
                  color: isBestDeal ? theme.palette.success.dark : "black",
                }}
              >
                AED
              </Typography>
            </Grid>
            <Button
              variant="outlined"
              color="primary"
              style={{ marginTop: "10px" }}
              size="small"
              onClick={() => {
                router.push("/redirection");
                window.localStorage.setItem(
                  "SELECTED_MEAL_PROVIDER",
                  JSON.stringify({ brand, brand_logo })
                );
              }}
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
