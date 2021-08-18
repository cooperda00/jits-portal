//Firebase
import { auth, googleAuthProvider } from "firebase/config";
//Toast
import toast from "react-hot-toast";

export const useSignIn = () => {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      console.error(error.message, error.code);
      toast.error(error.message);
    }
  };

  return { signInWithGoogle };
};
