<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <app-button text="Hello" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "@/components/atoms/AppButton.vue";

export default defineComponent({
  name: "Home",
  components: {
    AppButton,
  },
});
</script>
