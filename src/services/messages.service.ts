import { createInterval } from "@/helpers";
import { UserStatus } from "@/models/constants";
import { Message, User } from "@/models/interfaces";
import { Logger } from "@/utils";
import { BehaviorSubject, Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { v4 as uuid } from "uuid";

export class MessagesService {
  private logger = new Logger("messages service");

  private messagesSubject: BehaviorSubject<Message[]>;

  constructor() {
    const tempUser: User = {
      userId: uuid(),
      name: "John Doe",
      imageURL: "https://www.w3schools.com/howto/img_avatar.png",
      status: UserStatus.ACTIVE,
    };

    const sayings: string[] = [
      "Another day another dollar. Wow your job must suck.",
      "If you love something, set it free. If you hate it, cage it and make it your slave.",
      "Two heads are better than one. Unless they're on the same body.",
      "I know you are but what am I? Stupid.",
      "An apple a day keeps the doctor away. A doctor a day keeps everyone away.'Cause you're a CANABLE!",
      "A little goes a long way. Especially if it's disease.",
      "What's mine is yours and what's yours is mine. Luckily, you have better stuff then me.",
      "Friendship is the greatest treasure of all. Unless you have a magic pony.",
      "Actions speak louder than words. And that's why nobody reads anymore.",
      "What doesn't kill you, makes you stronger. If you try it again, I garentee you'll die.",
      "A promise is a promise. And a lie is a lie.",
      "Who let the cat out of the bag? Obviously the one who knew it needed air.",
      "Knowledge is power. Ignorance is bliss. Well, which is it?!",
      "An eye for an eye, a tooth for a tooth. Eventually you're going to run out of body parts.",
      "Oh give me a break! Sure, where?",
      "The pen is mightier than the sword. This does not apply in mortal combat.",
      "Silence is golden. And ductape is silver.",
      "Sticks and stones may break my bones... Well you're pretty much screwed from there.",
      "If life gives you lemons Make grape juice. Then, sit back and watch as the world tries to figure out how you did it.",
      "If you love something, set it free. If it comes back to you, you have a STALKER!",
      "Don't judge a book by it's cover. Don't judge a rock by its radiation.",
    ];

    const tempMessage: Message = {
      messageId: uuid(),
      reciever: tempUser,
      sender: tempUser,
      isTextMessage: true,
      isFileMessage: false,
      isImageMessage: false,
      files: null,
      textMessage: "",
      timestamp: Date.now(),
    };

    const messages = sayings.map((saying) => ({
      ...tempMessage,
      messageId: uuid(),
      textMessage: saying,
    }));

    this.messagesSubject = new BehaviorSubject<Message[]>(messages);
  }

  getMessagesList(): Observable<Message[]> {
    return of(async () => {
      this.logger.info("Getting messages.", this.messagesSubject.value);
      return await createInterval(3);
    }).pipe(switchMap(() => this.messagesSubject));
  }
}
