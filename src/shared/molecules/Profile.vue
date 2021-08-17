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
      @on-change-value="onProfileStatusChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import AppAvatar from "@/shared/atoms/AppAvatar.vue";
import AppText from "@/shared/atoms/AppText.vue";
import AppDropDown from "@/shared/atoms/AppDropDown.vue";

export default defineComponent({
  name: "profile",
  props: {
    userName: String,
    profileImage: String,
    currentUserStatus: String,
  },
  components: {
    AppAvatar,
    AppText,
    AppDropDown,
  },
  setup(props, context) {
    const onProfileStatusChange = (value: string) => {
      context.emit("onProfileStatusChange", value);
    };

    return { onProfileStatusChange };
  },
});
</script>

<style scoped lang="scss">
.profile-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
}
</style>
