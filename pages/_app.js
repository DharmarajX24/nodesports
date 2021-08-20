// pages/_app.js
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";
import Layout from "../components/common/Layout";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
