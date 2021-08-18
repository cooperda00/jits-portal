//React
import React, { useEffect } from "react";
//Next
import Head from "next/head";
import Router from "next/router";
import { GetStaticProps, NextPage } from "next";
//Data
import { getUsers } from "queries";
//Types
import { IUsersData } from "types";
//Styles
import { StyledUsersPage } from "features/Users/styles";
import { StyledPageHeading } from "styles";
//Hooks
import { useAuthStatus } from "hooks";

interface IProps {
  users: IUsersData;
}

/* This pages is not public so should be SPA style */
const UsersPage: NextPage<IProps> = ({ users }) => {
  const { isLoggedIn } = useAuthStatus();

  useEffect(() => {
    if (!isLoggedIn) Router.push("/login");
  }, [isLoggedIn]);

  return (
    <>
      <Head>
        <title>Jits Portal : Manage Users</title>
        <meta
          name="description"
          content="The online home for your Jiu Jitsu gym"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledUsersPage>
        <StyledPageHeading>Manage Users</StyledPageHeading>

        {users
          ? users.users.map((user, i) => {
              return (
                <div key={i}>
                  {user.name} : {user.email}
                </div>
              );
            })
          : null}
      </StyledUsersPage>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const users = await getUsers();

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
