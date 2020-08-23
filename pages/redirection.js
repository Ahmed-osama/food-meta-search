import { makeStyles, useTheme, Grid, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import Template from "@/components/Template/Template";
import Header from "@/components/Header/Header";
import _random from "lodash/random";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const useStyles = makeStyles({
  mainContainer: {
    height: "100vh",
  },

  logo: {
    maxWidth: "100px",
    margin: " auto",
    display: "block",
  },
});
export default function Redirection() {
  const router = useRouter();
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
      header={() => <Header headerText={"redirecting"} />}
      paddingTop={0}
    >
      <Grid
        container
        justify="center"
        alignContent="center"
        className={mainContainer}
      >
        <Grid xs={10} item alignItems="center" justify="center" container>
          <Grid xs={4} justify="center" item container>
            <img
              src={`seera.png`}
              alt=""
              style={{ maxHeight: "100px", maxWidth: "100px" }}
            />
          </Grid>
          <Grid xs={4} justify="center" item container>
            <ChevronRightIcon
              style={{ color: theme.palette.grey["300"] }}
              fontSize="large"
            />
            <ChevronRightIcon
              style={{ color: theme.palette.grey["500"] }}
              fontSize="large"
            />
            <ChevronRightIcon
              style={{ color: theme.palette.grey["300"] }}
              fontSize="large"
            />
          </Grid>
          <Grid xs={4} justify="center" item container>
            <img
              src={`./logos/${_random(1, 5)}.png`}
              alt=""
              style={{ maxHeight: "20px", maxWidth: "90px" }}
            />
          </Grid>
        </Grid>
        <Typography
          variant="body1"
          style={{ color: theme.palette.grey["600"], marginTop: "50px" }}
        >
          You found a greate deal on Careem Now
        </Typography>
        <Typography
          variant="body2"
          style={{ color: theme.palette.grey["600"] }}
        >
          taking You to Careem Now website
        </Typography>
      </Grid>
    </Template>
  );
}
