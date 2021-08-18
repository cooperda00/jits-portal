//React
import React, { useEffect } from "react";
//Next
import Head from "next/head";
import Router from "next/router";
import { NextPage } from "next";
//Components
import SignInWithGoogleButton from "features/Auth/SignInWithGoogleButton";
//Hooks
import { useAuthStatus } from "hooks";
//Styles
import { StyledLoginPage } from "features/Auth/styles";

/* This pages is public but doesn't rely on data so should be statically generated */
const Login: NextPage = () => {
  const { isLoggedIn } = useAuthStatus();

  useEffect(() => {
    if (isLoggedIn) Router.push("/users");
  }, [isLoggedIn]);

  return (
    <>
      <Head>
        <title>Jits Portal : Login</title>
        <meta
          name="description"
          content="The online home for your Jiu Jitsu gym"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledLoginPage>
        <SignInWithGoogleButton />
      </StyledLoginPage>
    </>
  );
};

export default Login;
