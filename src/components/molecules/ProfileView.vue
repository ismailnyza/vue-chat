<template>
  <div class="profile-container">
    <app-avatar
      class="profile-img"
      :size="'regular'"
      :isActive="true"
      :source="profileImage"
    />
    <app-text
      class="profile-text"
      :textType="'header'"
      :isBold="true"
      :isShaded="false"
      :value="userName"
    />
    <app-drop-down
      class="profile-visibility"
      :options="['Active', 'Offline', 'Busy']"
      :selectedOption="'Active'"
      :name="'User Status'"
    />
    <app-input></app-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import AppAvatar from "./../atoms/AppAvatar.vue";
import AppText from "./../atoms/AppText.vue";
import AppDropDown from "./../atoms/AppDropDown.vue";
import AppInput from "./../atoms/AppInput.vue";

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
    AppInput,
  },
});
</script>

<style scoped lang="scss">
.profile-container {
  display: grid;
  grid-row-gap: 2px;
  align-items: center;
  padding: 2%;
  padding-left: 10%;
}
.profile-img {
  margin-left: 160px;
}
.profile-text {
  margin-left: 150px;
}
.profile-visibility {
  margin-left: 90px;
}
</style>
