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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProfileView from "@vue-chat/shared/molecules/ProfileView.vue";
import Contact from "@vue-chat/shared/molecules/Contact.vue";

import { getReadableTime } from "@vue-chat/helpers";

const timestamp = getReadableTime(Date.now());

export default defineComponent({
  name: "home",
  components: {
    ProfileView,
    Contact,
  },
  data: () => {
    return {
      timestamp,
      name: "John Doe",
      contactImage:
        "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png",
      message: "This is a message.",
    };
  },
});
</script>
