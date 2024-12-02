import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";

import { I18nextProvider } from "react-i18next";
import i18n from "../configs/i18n.mjs";

import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import GlobalStyle, {  darkTheme } from '../components/globalstyles';



function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Установите язык для корневого элемента
    document.documentElement.lang = router.locale;
    i18n.changeLanguage(router.locale);
  }, [router.locale]);



  return (
    <>
      <GlobalStyle locale={router.locale}/>
      <Component {...pageProps} />
    </>
  );
}

export default function AppWithProvider({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={darkTheme}>
        <App Component={Component} pageProps={pageProps} router={undefined} />
        </ThemeProvider>
      </I18nextProvider>
    </SessionProvider>
  );
}
