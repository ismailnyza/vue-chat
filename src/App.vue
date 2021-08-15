<template>
  <div class="container">
    <home />
    <conversation-area />
    <conversation-detalis-area />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Home from "@/views/Home.vue";
import ConversationArea from "@/views/ConversationArea.vue";
import ConversationDetalisArea from "@/views/ConversationDetailsArea.vue";

export default defineComponent({
  name: "App",
  components: {
    Home,
    ConversationArea,
    ConversationDetalisArea,
  },
});
</script>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
</style>
