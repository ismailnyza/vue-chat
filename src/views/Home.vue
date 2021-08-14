<template>
  <div class="home">
    <profile-view
      :userName="'John Doe'"
      :profileImage="'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'"
    />
    <hr />
    <contact
      :contactName="'John Doe'"
      :secondaryText="'Last message sent'"
      :contactImage="'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'"
      :timestamp="timestamp"
    />
  </div>
  <app-button> Hello Button </app-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProfileView from "@/components/molecules/ProfileView.vue";
import AppButton from "@/components/atoms/AppButton.vue";
import Contact from "@/components/molecules/Contact.vue";

import { getReadableTime } from "@/helpers/time";

const timestamp = getReadableTime(Date.now());

export default defineComponent({
  name: "Home",
  components: {
    ProfileView,
    AppButton,
    Contact,
  },
  data: () => {
    return { timestamp };
  },
});
</script>
