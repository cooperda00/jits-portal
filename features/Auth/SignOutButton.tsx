//Firebase
import { auth } from "firebase/config";
//Styles
import { StyledSignInButton } from "./styles";

const SignOutButton = () => {
  const SignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error.message, error.code);
      //Show a toast to the user with the error
    }
  };

  return <StyledSignInButton onClick={SignOut}>Sign Out</StyledSignInButton>;
};

export default SignOutButton;
