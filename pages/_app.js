import { ThemeProvider } from "@material-ui/core/styles";
import theme from "@/styles/theme";
import { isServer } from "@/utils/common";
isServer;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {isServer() ? null : <Component {...pageProps} />}
    </ThemeProvider>
  );
}

export default MyApp;
