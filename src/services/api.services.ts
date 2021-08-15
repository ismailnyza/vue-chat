import { ContactsService } from "./contacts.service";
import { UserService } from "./user.service";

interface ServiceTypes {
  userService: UserService;
  contactsService: ContactsService;
}

export function APIServices(): ServiceTypes {
  return {
    userService: new UserService(),
    contactsService: new ContactsService(),
  };
}
