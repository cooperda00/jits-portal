//React
import { useContext } from "react";
import { AuthContext } from "context";

export const useAuthStatus = () => {
  const { user } = useContext(AuthContext);

  return {
    isLoggedIn: user !== null,
    user,
  };
};
