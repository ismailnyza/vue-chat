import { createInterval } from "@/helpers";
import { UserStatus } from "@/models/constants";
import { Contact, Message, User } from "@/models/interfaces";
import { Logger } from "@/utils";
import { BehaviorSubject, Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { v4 as uuid } from "uuid";

export class ContactsService {
  private logger = new Logger("contacts service");

  private contactsSubject: BehaviorSubject<Contact[]>;

  constructor() {
    const tempUser: User = {
      userId: uuid(),
      name: "John Doe",
      imageURL: "https://www.w3schools.com/howto/img_avatar.png",
      status: UserStatus.ACTIVE,
    };

    const lastMessage: Message = {
      messageId: uuid(),
      reciever: tempUser,
      sender: tempUser,
      isTextMessage: true,
      isFileMessage: false,
      isImageMessage: false,
      files: null,
      textMessage: "Hello people....",
      timestamp: Date.now(),
    };

    const contacts: Contact[] = [
      {
        contactId: uuid(),
        contactName: "Dharana Dinindu",
        lastContactDetails: lastMessage,
        contactImage: "https://www.w3schools.com/w3images/avatar6.png",
      },
      {
        contactId: uuid(),
        contactName: "Ismail Nizer",
        lastContactDetails: lastMessage,
        contactImage: "https://www.w3schools.com/w3images/avatar6.png",
      },
      {
        contactId: uuid(),
        contactName: "Ammar Raneez",
        lastContactDetails: lastMessage,
        contactImage: "https://www.w3schools.com/w3images/avatar6.png",
      },
    ];
    this.contactsSubject = new BehaviorSubject<Contact[]>(contacts);
  }

  getContactsList(): Observable<Contact[]> {
    return of(async () => {
      this.logger.info("Getting contacts.", this.contactsSubject.value);
      return await createInterval(3);
    }).pipe(switchMap(() => this.contactsSubject));
  }
}
