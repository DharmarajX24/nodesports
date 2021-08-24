// pages/_app.js
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import Layout from "../components/common/Layout";
import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "../styles/material.ui.theme.provider";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ThemeProvider>
  );
}
