//Next
import type { NextApiRequest, NextApiResponse } from "next";
//Firebase
import admin from "firebase-admin";
//Validation
import { validateNewUserForm } from "features/Users/NewUserForm/validation";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      projectId: process.env.FIREBASE_PROJECT_ID,
    }),
  });
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, address1, address2, city, county, postcode, password } =
    req.body;

  const [isValid] = await validateNewUserForm(req.body);

  if (!isValid) {
    res.status(400).json({ error: "form data is invalid" });
    return;
  }

  try {
    const newUserRecord = await admin.auth().createUser({ email, password });
    await admin.firestore().collection("users").doc(newUserRecord.uid).set({
      name,
      email,
      address1,
      address2,
      city,
      county,
      postcode,
    });
    res.status(200).json("success");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default handler;
