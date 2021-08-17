<template>
  <div>
    <div class="profile">
      <h1>Profile</h1>
    </div>
    <div class="conversation-list">
      <h1>Conversation List</h1>
    </div>
  </div>
  <div class="conversation">
    <h1>Conversation</h1>
  </div>
  <div class="converasion-details"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class ConversationView extends Vue {}
</script>
