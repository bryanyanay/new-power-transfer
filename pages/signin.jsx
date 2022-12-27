import Head from "next/head";
import Header from "../components/header";
import Subheader from "../components/subheader";

function SignIn() {
  return (
    <div>
      <Head>
        <title>Sign In/Up</title>
      </Head>
      <Header>Sign In/Up</Header>
      <Subheader>Sign in or sign up here to get started!</Subheader>
    </div>
  );
}

export default SignIn;