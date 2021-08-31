import Head from "next/head";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import Layout from "../components/common/Layout";
import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "../styles/material.ui.theme.provider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Nodesports</title>

        <meta property="og:image" content={"/static/logo.png"} key="ogimage" />
        <meta property="og:site_name" content="Nodesports" key="ogsitename" />
        <meta property="og:title" content="Nodesports" key="ogtitle" />
        <meta
          property="og:description"
          content="Esports platform to host and play tournaments"
          key="ogdesc"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}
