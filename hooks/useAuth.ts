//React
import { useEffect, useState } from "react";
//Firebase
import firebase, { auth, firestore } from "firebase/config";

export const useAuth = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [isInitialised, setIsInitialised] = useState(false);

  //Minimal project =
  //can login, view a list of users, go to their profile, edit their own details (usename), logout
  //Then go on to refactor and test until production ready
  //Feature branch from that point forward

  //REFACTOR THIS STUFF INTO SMALLER FUNCTIONS

  //ADD USERNAME TO AUTH STATE

  //CREATE A USER SETTINGS PAGE WHERE THE USER CAN UPDATE THEIR USERNAME, PASSWORD

  //ADD USER ICON COMPONENT

  //PUT A SILHOETTE AS DEFAULT

  //ALLOW THE USER TO CHANGE THEIR IMAGE (upload an image, put a cirlce around it) react-easy-crop
  //Upload to bucket etc

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      setIsInitialised(true);

      if (!currentUser) {
        setUser(null);
        return;
      }

      //Check to see if the user has a doc in the db, if not create one
      const docRef = firestore.collection("users").doc(currentUser.uid);
      const userDoc = await docRef.get();

      if (userDoc.exists) {
        setUser(currentUser);
        return;
      }

      const newUser = {
        email: currentUser.email,
        userName: currentUser.email?.split("@")[0], //set before @ of email as username
      };

      //Check if that username exists already
      const docs = await firestore
        .collection("users")
        .where("userName", "==", newUser.userName)
        .limit(1)
        .get();
      if (docs.size > 0) newUser.userName = currentUser.uid;

      //If it does, just set as the id
      await docRef.set(newUser);

      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  return { user, isInitialised };
};
