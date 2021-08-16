import { createInterval } from "@vue-chat/helpers";
import { Contact } from "@vue-chat/models/interfaces";
import { Logger } from "@vue-chat/utils";
import { BehaviorSubject, Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { v4 as uuid } from "uuid";

export class ContactsService {
  private logger = new Logger("contacts service");

  private contactsSubject: BehaviorSubject<Contact[]>;

  constructor() {
    const contacts: Contact[] = [
      {
        contactId: uuid(),
        contactName: "Dharana Dinindu",
        lastContactDetails: null,
      },
      {
        contactId: uuid(),
        contactName: "Ismail Nizer",
        lastContactDetails: null,
      },
      {
        contactId: uuid(),
        contactName: "Ammar Raneez",
        lastContactDetails: null,
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
