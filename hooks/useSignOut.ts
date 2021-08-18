//Firebase
import { auth } from "firebase/config";
//Toast
import toast from "react-hot-toast";

export const useSignOut = () => {
  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error.message, error.code);
      toast.error(error.message);
    }
  };

  return signOut;
};
