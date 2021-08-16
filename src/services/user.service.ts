import { createInterval } from "@vue-chat/helpers";
import { UserStatus } from "@vue-chat/models/constants";
import { User } from "@vue-chat/models/interfaces";
import { Logger } from "@vue-chat/utils";
import { BehaviorSubject, Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

export class UserService {
  private logger = new Logger("user service");

  private userSubject: BehaviorSubject<User>;

  constructor() {
    const user: User = {
      userId: "aonehssaoetuhsaoeu",
      name: "John Doe",
      imageURL: "https://www.w3schools.com/howto/img_avatar.png",
      status: UserStatus.ACTIVE,
    };
    this.userSubject = new BehaviorSubject(user);
  }

  getCurrentUserStream(): Observable<User> {
    return of(async () => {
      this.logger.info("Getting current user.", this.userSubject.value);
      return await createInterval(3);
    }).pipe(switchMap(() => this.userSubject));
  }

  async updateUserStatus(status: UserStatus): Promise<void> {
    this.logger.info("Updating user status", status);
    await createInterval(3);
    const user = { ...this.userSubject.value, status };
    this.userSubject.next(user);
  }
}
