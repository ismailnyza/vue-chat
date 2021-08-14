<template>
  <div class="home">
    <profile-view
      :userName="'John Doe'"
      :profileImage="'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png'"
    />
  </div>
  <app-button> Hello Button </app-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProfileView from "@/components/molecules/ProfileView.vue";
import AppButton from "@/components/atoms/AppButton.vue";

export default defineComponent({
  name: "Home",
  components: {
    ProfileView,
    AppButton,
  },
});
</script>
