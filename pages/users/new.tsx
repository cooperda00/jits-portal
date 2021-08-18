//React
import React, { useEffect } from "react";
//Next
import Router from "next/router";
//Hooks
import { useAuthStatus } from "hooks";

/* This pages is not public so should be SPA style */
const NewUserPage = () => {
  const { isLoggedIn } = useAuthStatus();

  useEffect(() => {
    if (!isLoggedIn) Router.push("/login");
  }, [isLoggedIn]);

  return (
    <div>
      <h1>Add A New User</h1>
    </div>
  );
};

export default NewUserPage;
