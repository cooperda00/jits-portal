//React
import React, { useEffect } from "react";
//Next
import Router from "next/router";
//Components
import Spinner from "Components/Spinner";
//Hooks
import { useAuthStatus } from "hooks";

/* This pages is not public so should be SPA style */
const UserPage = () => {
  const { isLoggedIn } = useAuthStatus();

  useEffect(() => {
    if (!isLoggedIn) Router.push("/login");
  }, [isLoggedIn]);

  return (
    <div>
      <h1>User : </h1>
      <Spinner show />
    </div>
  );
};

export default UserPage;
