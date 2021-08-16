import { UserStatus } from "../constants";

export interface User {
  userId: string;
  name: string;
  status: UserStatus;
  imageURL: string;
}
