<template>
  <div class="home">
    <profile-view :userName="name" :profileImage="contactImage" />
    <hr />
    <contact
      :contactName="name"
      :secondaryText="'Last message sent'"
      :contactImage="contactImage"
      :timestamp="timestamp"
    />
    <hr />
    <message
      :contactImage="contactImage"
      :message="message"
      :isActive="false"
      :contactName="name"
      :timestamp="timestamp"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProfileView from "@/components/molecules/ProfileView.vue";
import Contact from "@/components/molecules/Contact.vue";
import Message from "@/components/molecules/Message.vue";

import { getReadableTime } from "@/helpers/time";

const timestamp = getReadableTime(Date.now());

export default defineComponent({
  name: "Home",
  components: {
    ProfileView,
    Contact,
    Message,
  },
  data: () => {
    return {
      timestamp,
      name: "John Doe",
      contactImage:
        "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png",
      message: "This is a message. This can be long and short",
    };
  },
});
</script>
