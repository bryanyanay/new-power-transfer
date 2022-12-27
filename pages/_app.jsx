// next uses this to initialize every page

import "../styles/globals.css";

import Layout from "../components/layout";

function PowerTransfer({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  );
}

export default PowerTransfer;

