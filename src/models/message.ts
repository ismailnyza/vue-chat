import { User } from "./user";

export interface Message {
  messageId: string;
  reciever: User;
  sender: User;
  isTextMessage: boolean;
  isFileMessage: boolean;
  isImageMessage: boolean;
  files: string[] | null;
  textMessage: string | null;
  timestamp: number;
}
