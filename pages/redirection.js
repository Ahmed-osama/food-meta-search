import { makeStyles, useTheme, Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import Template from "@/components/Template/Template";
import Header from "@/components/Header/Header";

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
        <Grid xs={10} item alignItems="center"></Grid>
      </Grid>
    </Template>
  );
}
