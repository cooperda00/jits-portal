//React
import React, { FC } from "react";
//Next
import Link from "next/link";
//Styles
import { StyledLayout } from "./styles";
//Hooks
import { useAuthStatus } from "hooks";
import SignOutButton from "features/Auth/SignOutButton";

const Layout: FC = ({ children }) => {
  const { isLoggedIn } = useAuthStatus();

  return (
    <StyledLayout>
      <header>
        {isLoggedIn ? (
          <>
            <Link href="/users" prefetch>
              Users
            </Link>

            <Link href="/users/:id" prefetch>
              Single User
            </Link>

            <SignOutButton />
          </>
        ) : null}

        {!isLoggedIn ? (
          <Link href="/login" prefetch>
            Login
          </Link>
        ) : null}
      </header>
      {children}
    </StyledLayout>
  );
};

export default Layout;
