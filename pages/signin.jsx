import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { getProviders, signIn } from "next-auth/react";

import Head from "next/head";
import Header from "../components/header";
import Subheader from "../components/subheader";

function SignIn({ providers }) {
  return (
    <div>
      <Head>
        <title>Sign In/Up</title>
      </Head>
      <Header>Sign In/Up</Header>
      <Subheader>Sign in or sign up here to get started!</Subheader>
      {
        Object.values(providers).map((p) => { // in react all JSX elements directly in a map need keys
          return <button className="mb-4 bg-white border-solid border-4 font-bold rounded-full p-5 pt-3 pb-3 text-xl border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-white transition" key={p.name} onClick={() => signIn(p.id)}>Sign in with {p.name}</button>
        })
      }

    </div>
  );
}

/* Module not found v8 issue: with unstable_getServerSession (and related imports)
The issue was next.js was bundling some of my imports with the client-side code even though I only intended to use it server-side, and the code only works server-side due to requiring node.js specific modules like v8

This solved it: https://stackoverflow.com/questions/70746528/webpack-with-next-js-bundles-file-it-is-not-supposed-to-in-client-bundle

basically I had to actually start using my server-side only imports in getServerSideProps, since otherwise next.js doesn't know I only need it for serverside and will bundle it with both server and client side, super sneaky error! */

export async function getServerSideProps({ req, res }) {
  const session = await unstable_getServerSession(req, res, authOptions); 

  if (session) { // if there's already a session redirect to homepage
    res.writeHead(302, { Location: "/" });
    res.end();
    return;
  }

  const providers = await getProviders();
  return {
    props: { providers }
  };
}

export default SignIn;

