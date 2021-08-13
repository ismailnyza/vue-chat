<template>
  <button>{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-button",
  props: {
    text: String,
    isColored: Boolean,
    size: String, // small, regular, tiny
  },
});
</script>

<style scoped lang="scss"></style>
