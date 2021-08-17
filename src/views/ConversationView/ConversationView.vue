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
    <div class="conversation">
      <h1>Conversation</h1>
    </div>
    <div class="converasion-details"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Subscription } from "rxjs";

import { API } from "@/services/api.services";
import { Contact, User } from "@/models/interfaces";

import Profile from "@/shared/molecules/Profile.vue";
import ContactsList from "@/shared/organisms/ContactsList.vue";

@Options({
  components: {
    Profile,
    ContactsList,
  },
})
export default class ConversationView extends Vue {
  user: User | null = null;
  contactsList: Contact[] = [];
  subscriptions: Subscription[] = [];

  beforeCreate(): void {
    this.subscriptions.push(
      API()
        .userService.getCurrentUserStream()
        .subscribe((user) => (this.user = user)),
      API()
        .contactsService.getContactsList()
        .subscribe((contactsList) => (this.contactsList = contactsList))
    );
  }

  beforeUnmount(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 25% 50% 25%;
  padding: 10px;
}
</style>
