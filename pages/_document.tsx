import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";


export default function Document() {


  return (
  
    <Html lang="uk">
      <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <div id="portal" />
        <NextScript />
        {/* <!-- "snowflake", "circle", или "star" --> */}
        {/* <Script src="/snowfall.js"   strategy="afterInteractive"/> */}
      </body>
    </Html>
 
  );
}
