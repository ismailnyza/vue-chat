<template>
  <div class="profile-container">
    <app-avatar :size="'regular'" :isActive="true" :source="profileImage" />
    <app-text
      :textType="'header'"
      :isBold="true"
      :isShaded="false"
      :value="userName"
    />
    <app-drop-down
      :options="['Active', 'Offline', 'Busy']"
      :selectedOption="'Active'"
      :name="'User Status'"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import AppAvatar from "@vue-chat/shared/atoms/AppAvatar.vue";
import AppText from "@vue-chat/shared/atoms/AppText.vue";
import AppDropDown from "@vue-chat/shared/atoms/AppDropDown.vue";

export default defineComponent({
  name: "profile-view",
  props: {
    userName: String,
    profileImage: String,
    currentUserStatus: Array as PropType<string[]>,
  },
  components: {
    AppAvatar,
    AppText,
    AppDropDown,
  },
});
</script>

<style scoped lang="scss">
.profile-container {
  display: grid;
  grid-row-gap: 2px;
}
</style>
