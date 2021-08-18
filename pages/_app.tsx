//React
import { useState, useEffect } from "react";
//Next
import type { AppProps } from "next/app";
//Styles
import { GlobalStyles } from "styles/globalStyles";
//Components
import Layout from "Components/Layout";
//Auth
import { AuthContext } from "context";
//Hooks
import { useAuth } from "hooks";

function AppContainer({ Component, pageProps }: AppProps) {
  const { user, isInitialised } = useAuth();

  return (
    <>
      <GlobalStyles />

      <AuthContext.Provider value={{ user }}>
        {isInitialised ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : null}
      </AuthContext.Provider>
    </>
  );
}

export default AppContainer;
