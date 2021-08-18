//Firebase
import { auth, googleAuthProvider } from "firebase/config";
//Styles
import { StyledSignInButton } from "./styles";

const SignInWithGoogleButton = () => {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      console.error(error.message, error.code);
      //Show a toast to the user with the error
    }
  };

  return (
    <StyledSignInButton onClick={signInWithGoogle}>
      <img src="/google.png" alt="Sign in with Google" />
      Sign In With Google
    </StyledSignInButton>
  );
};

export default SignInWithGoogleButton;
