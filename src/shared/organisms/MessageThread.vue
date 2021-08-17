<template>
  <div class="messages-container">
    <message-item
      v-for="message in messages"
      :key="message.messageId"
      :contactImage="message.sender.imageURL"
      :message="message.textMessage"
      :isActive="message.sender.isActive"
      :timestamp="getReadableTime(message.timestamp)"
      :isCurrentUser="getRandomCurrentUser()"
    />
  </div>
</template>

<script lang="ts">
import { Message } from "@/models/interfaces";
import { defineComponent, PropType } from "vue";
import MessageItem from "@/shared/molecules/MessageItem.vue";
import { getReadableTime } from "@/helpers";

export default defineComponent({
  name: "contacts-list",
  props: {
    messages: Array as PropType<Message[]>,
  },
  components: {
    MessageItem,
  },
  methods: {
    getReadableTime,
    getRandomCurrentUser() {
      return Math.round(Math.random() * 10) % 2 === 1;
    },
  },
});
</script>

<style scoped lang="scss">
.messages-container {
  list-style: none;
  background: none;
  margin: 0;
  padding: 0 0 50px 0;
  margin-top: 60px;
  margin-bottom: 10px;
  overflow: hidden;
}
</style>
