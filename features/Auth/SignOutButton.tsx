//Styles
import { StyledButton } from "styles";
//Toast
import { useSignOut } from "hooks";

const SignOutButton = () => {
  const signOut = useSignOut();

  return <StyledButton onClick={signOut}>Sign Out</StyledButton>;
};

export default SignOutButton;
