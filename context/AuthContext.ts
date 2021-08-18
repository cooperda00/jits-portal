//React
import { createContext } from "react";
//Firebase
import firebase from "firebase/config";

interface IAuthContext {
  user: null | firebase.User;
}

const initialState: IAuthContext = {
  user: null,
};

export const AuthContext = createContext<IAuthContext>(initialState);
