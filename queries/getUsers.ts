//Axios
import axios from "axios";
//Types
import { IUsersData } from "../types";

export const getUsers = async (): Promise<IUsersData> => {
  const res = await axios.get("http://localhost:3000/api/users", {
    params: {
      iterations: 10,
    },
  });

  return res.data as IUsersData;
};
