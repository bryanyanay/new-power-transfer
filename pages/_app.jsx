// next uses this to initialize every page

import "../styles/globals.css";

import Layout from "../components/layout";
import Head from "next/head";

import { SessionProvider } from "next-auth/react";

function PowerTransfer({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        </Head>
        <Component {...pageProps}/>
      </Layout>
    </SessionProvider>
  );
}

export default PowerTransfer;

