import Document, { Html, Head, Main, NextScript } from "next/document";
import CssBaseline from "@material-ui/core/CssBaseline";
class MyDocument extends Document {
  //   static async getInitialProps(ctx) {
  //     const initialProps = await Document.getInitialProps(ctx);
  //     return { ...initialProps };
  //   }

  render() {
    return (
      <Html>
        <Head>
          <title>SEERA FOODS</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <body style={{ margin: 0 }}>
          <CssBaseline />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
