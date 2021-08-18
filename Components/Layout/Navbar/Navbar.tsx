//React
import React from "react";
//Next
import Link from "next/link";
//Hooks
import { useAuthStatus } from "hooks";
//Components
import SignOutButton from "features/Auth/SignOutButton";
//Styles
import { StyledNavbar } from "./styles";

const Navbar = () => {
  const { isLoggedIn } = useAuthStatus();

  return (
    <StyledNavbar>
      {isLoggedIn ? (
        <>
          <Link href="/users" prefetch>
            Users
          </Link>

          <SignOutButton />
        </>
      ) : null}
    </StyledNavbar>
  );
};

export default Navbar;
