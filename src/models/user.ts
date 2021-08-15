import { UserStatus } from "./user-status";

export interface User {
  userId: string;
  name: string;
  status: UserStatus;
  imageURL: string;
}
