import { makeStyles, useTheme } from "@material-ui/core";
import { useRouter } from "next/router";
import Template from "@/components/Template/Template";
import Header from "@/components/Header/Header";
import _random from "lodash/random";
import { useState, useEffect } from "react";
const useStyles = makeStyles({
  mainContainer: {
    height: "calc(100vh - 56px)",
    marginTop: "56px",
    width: "100%",
    overflowX: "hidden",
    overflowY: "scroll",
    "& img": {
      maxWidth: "100%",
    },
  },
});
export default function Redirection() {
  const router = useRouter();
  const { mainContainer } = useStyles();
  const theme = useTheme();
  const [provider, setProvider] = useState(null);
  useEffect(() => {
    setProvider(
      JSON.parse(window.localStorage.getItem("SELECTED_MEAL_PROVIDER"))
    );
  }, []);
  return (
    <Template
      header={() => <Header headerText={provider ? provider.brand : "---"} />}
      paddingTop={0}
    >
      <div className={mainContainer}>
        <img src="./talabat-screenshot.png" />
      </div>
    </Template>
  );
}
