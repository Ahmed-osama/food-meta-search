import { useRouter } from "next/router";
import { Grid, TextField, Button, InputAdornment } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import _random from "lodash/random";
import Template from "@/components/Template/Template";
import Header from "@/components/Header/Header";
import PinDropIcon from "@material-ui/icons/PinDrop";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { DUBAI_PLACES, MEALS_LIST } from "@/constants";
import { useTheme } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles({
  autocomplete_1: { margin: "0", "& div": { borderRadius: "4px 4px 0 0 " } },
  autocomplete_2: {
    margin: "0",
    "& div": { borderRadius: "0 0 4px 4px" },
    "& fieldset": { borderTopColor: "transparent", marginTop: "-1px" },
  },
  searchButton: {
    marginTop: "20px",
    height: "50px",
    width: "100%",
  },
  mainContainer: {
    height: "100vh",
  },
  featuredImage: {
    maxWidth: "100%",
    height: "30vh",
    margin: "20px auto 0",
    display: "flex",
  },
  logo: {
    maxWidth: "100px",
    margin: " auto",
    display: "block",
  },
});
export default function Search() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [meal, setMeal] = useState("");
  const {
    autocomplete_1,
    autocomplete_2,
    mainContainer,
    searchButton,
    featuredImage,
    logo,
  } = useStyles();
  const theme = useTheme();
  return (
    <Template
      header={() => <Header headerText={"Seera Foods"} paddingTop={0} />}
    >
      <Grid
        container
        justify="center"
        alignContent="center"
        className={mainContainer}
      >
        <Grid xs={10} item alignItems="center">
          <img src="seera.png" className={logo} />
          <Autocomplete
            freeSolo
            disableClearable
            options={DUBAI_PLACES.map((option) => option)}
            onChange={(e, newvalue) => {
              setLocation(newvalue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="search your location"
                margin="normal"
                variant="outlined"
                className={autocomplete_1}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                  startAdornment: (
                    <InputAdornment position="start">
                      <PinDropIcon
                        style={{ color: theme.palette.grey["500"] }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Autocomplete
            freeSolo
            disableClearable
            options={MEALS_LIST.map((option) => option)}
            onChange={(e, newvalue) => {
              setMeal(newvalue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Find your meal"
                margin="normal"
                variant="outlined"
                className={autocomplete_2}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                  startAdornment: (
                    <InputAdornment position="start">
                      <FastfoodIcon
                        style={{ color: theme.palette.grey["500"] }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              router.push({
                pathname: "/search-results",
                query: { location, meal },
              })
            }
            className={searchButton}
            disabled={!location || !meal}
          >
            Search Restaurants
          </Button>
          <img
            src={`/home-image/home-image-${_random(1, 3)}.png`}
            className={featuredImage}
          />
        </Grid>
      </Grid>
    </Template>
  );
}
