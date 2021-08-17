<template>
  <div class="container">
    <div>
      <div class="profile" :v-if="user">
        <profile
          :currentUserStatus="user.status"
          :profileImage="user.imageURL"
        />
      </div>
      <div class="conversation-list">
        <contacts-list :contacts="contactsList" />
      </div>
    </div>
    <div class="conversation-container">
      <h1>Conversation</h1>
      <app-button>Messages</app-button>
      <app-button>Participants</app-button>
      <messages-thread :messages="messagesList" class="conversation" />
    </div>
    <div class="converasion-details"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Subscription } from "rxjs";

import { API } from "@/services/api.services";
import { Contact, Message, User } from "@/models/interfaces";

import Profile from "@/shared/molecules/Profile.vue";
import ContactsList from "@/shared/organisms/ContactsList.vue";
import MessagesThread from "@/shared/organisms/MessageThread.vue";
import AppButton from "@/shared/atoms/AppButton.vue";

@Options({
  components: {
    Profile,
    ContactsList,
    MessagesThread,
    AppButton,
  },
})
export default class ConversationView extends Vue {
  user: User | null = null;
  contactsList: Contact[] = [];
  messagesList: Message[] = [];
  subscriptions: Subscription[] = [];

  beforeCreate(): void {
    this.subscriptions.push(
      API()
        .userService.getCurrentUserStream()
        .subscribe((user) => (this.user = user)),
      API()
        .contactsService.getContactsList()
        .subscribe((contactsList) => (this.contactsList = contactsList)),
      API()
        .messagesService.getMessagesList()
        .subscribe((messages) => (this.messagesList = messages))
    );
  }

  beforeUnmount(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: 25% 50% 25%;

  .conversation {
    height: 100vh;
  }
}

.conversation-container {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin: 5px;
}
</style>
