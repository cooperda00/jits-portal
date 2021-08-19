//Next
import type { NextApiRequest, NextApiResponse } from "next";
//Firebase
import admin from "firebase-admin";
import { IUser, IUsersData, Users } from "types";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      projectId: process.env.FIREBASE_PROJECT_ID,
    }),
  });
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IUsersData>
) => {
  const docs = await admin.firestore().collection("users").get();

  const users: Users = [];

  docs.forEach((doc) => {
    const data = doc.data() as IUser;
    users.push({ ...data, id: doc.id });
  });

  res.status(200).json({ users });
};

export default handler;
