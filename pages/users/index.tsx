//React
import React, { useEffect, useCallback, useState } from "react";
//Next
import Head from "next/head";
import Router from "next/router";
import { NextPage } from "next";
//Data
import { getUsers } from "queries";
//Types
import { IUsersData } from "types";
//Styles
import { StyledUsersPage } from "features/Users/styles";
import { StyledPageHeading } from "styles";
//Hooks
import { useAuthStatus } from "hooks";
//Components
import UserList from "features/Users/UserList";
import UserControls from "features/Users/UserControls";

/* This pages is not public so should be SPA style */
const UsersPage: NextPage = () => {
  const { isLoggedIn } = useAuthStatus();

  useEffect(() => {
    if (!isLoggedIn) Router.push("/login");
  }, [isLoggedIn]);

  const [users, setUsers] = useState<IUsersData | null>(null);

  const fetchUsers = useCallback(async () => {
    const fetchedUsers = await getUsers();
    setUsers(fetchedUsers);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

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
        <UserControls />
        <UserList users={users} />
      </StyledUsersPage>
    </>
  );
};

export default UsersPage;
