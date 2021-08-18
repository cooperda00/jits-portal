//Styles
import { useSignIn } from "hooks";
//Hooks
import { StyledSignInButton } from "./styles";

const SignInWithGoogleButton = () => {
  const { signInWithGoogle } = useSignIn();

  return (
    <StyledSignInButton onClick={signInWithGoogle}>
      <img src="/google.png" alt="Sign in with Google" />
      Sign In With Google
    </StyledSignInButton>
  );
};

export default SignInWithGoogleButton;
