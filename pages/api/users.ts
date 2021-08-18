//Next
import type { NextApiRequest, NextApiResponse } from "next";
//Helpers
import faker from "faker";
//Types
import { DummyUsers, IUsersData } from "../../types";

const handler = (req: NextApiRequest, res: NextApiResponse<IUsersData>) => {
  let numberOfIterations = 1;

  if (req.query.iterations) numberOfIterations = Number(req.query.iterations);

  const dummyUsers: DummyUsers = [];

  for (let i = 0; i < numberOfIterations; i++) {
    dummyUsers.push(faker.helpers.createCard());
  }

  res.status(200).json({ users: dummyUsers });
};

export default handler;
