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
p {
  font-size: 1.8rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.container {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
</style>
