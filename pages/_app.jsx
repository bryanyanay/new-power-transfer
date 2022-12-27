// next uses this to initialize every page

import "../styles/globals.css";

import Layout from "../components/layout";
import Head from "next/head";

function PowerTransfer({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
      <Component {...pageProps}/>
    </Layout>
  );
}

export default PowerTransfer;

