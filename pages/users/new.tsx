//React
import React, { useEffect } from "react";
//Next
import Router from "next/router";
//Hooks
import { useAuthStatus } from "hooks";
//Styles
import { StyledUsersPage } from "features/Users/styles";
import { StyledPageHeading } from "styles";
//Components
import NewUserForm from "features/Users/NewUserForm";

/* This pages is not public so should be SPA style */
const NewUserPage = () => {
  const { isLoggedIn } = useAuthStatus();

  useEffect(() => {
    if (!isLoggedIn) Router.push("/login");
  }, [isLoggedIn]);

  return (
    <StyledUsersPage>
      <StyledPageHeading>Add A New User</StyledPageHeading>
      <NewUserForm />
    </StyledUsersPage>
  );
};

export default NewUserPage;
