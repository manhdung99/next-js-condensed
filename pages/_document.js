/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>NextJS Condensed</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
