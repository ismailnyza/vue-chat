import { Message } from "./message";

export interface Contact {
  contactId: string;
  contactName: string;
  lastContactDetails: Message | null;
}
