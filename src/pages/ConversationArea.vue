<template>
  <div>
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
import Message from "@vue-chat/shared/molecules/Message.vue";

import { getReadableTime } from "@vue-chat/helpers";

const timestamp = getReadableTime(Date.now());

export default defineComponent({
  name: "conversation-area",
  components: {
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
