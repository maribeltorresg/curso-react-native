import axios from "axios";
import type { UserListResponse } from "../interfaces/reqres.response";
// import { type UserListResponse } from "../interfaces/reqres.response";

export const loadUsersAction = async (page: number) => {
  const limit = 5; // como ReqRes
  const skip = (page - 1) * limit;
  try {
    const { data } = await axios.get<UserListResponse>(
      // `https://reqres.in/api/users`,
      // `/api/api/users`,
      // `https://jsonplaceholder.typicode.com/users`,
      `https://dummyjson.com/users?limit=${limit}&skip=${skip}`,
    );

    return data.data;

  } catch (error) {
    console.log(error);
    return [];
  }
};
