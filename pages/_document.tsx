import { Html, Head, Main, NextScript } from "next/document";


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
      </body>
    </Html>
 
  );
}
