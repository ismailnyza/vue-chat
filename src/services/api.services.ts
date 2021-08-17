import { ContactsService } from "./contacts.service";
import { MessagesService } from "./messages.service";
import { UserService } from "./user.service";

interface ServiceTypes {
  userService: UserService;
  contactsService: ContactsService;
  messagesService: MessagesService;
}

export function API(): ServiceTypes {
  return {
    userService: new UserService(),
    contactsService: new ContactsService(),
    messagesService: new MessagesService(),
  };
}
