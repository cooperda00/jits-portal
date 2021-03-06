//React
import { useEffect } from "react";
//Next
import Head from "next/head";
import Router from "next/router";
import { NextPage } from "next";
//Hooks
import { useAuthStatus } from "hooks";

const Home: NextPage = () => {
  const { isLoggedIn } = useAuthStatus();

  useEffect(() => {
    if (!isLoggedIn) Router.push("/login");
    if (isLoggedIn) Router.push("/users");
  }, [isLoggedIn]);

  return (
    <>
      <Head>
        <title>Jits Portal : Home</title>
        <meta
          name="description"
          content="The online home for your Jiu Jitsu gym"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;
