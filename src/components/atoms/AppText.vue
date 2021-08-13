<template>
  <p>{{ value }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-text",
  props: {
    value: String,
    isBold: Boolean,
    isShaded: Boolean,
    textType: String, // header, title, subtitle, message, tiny-text
  },
});
</script>

<style scoped lang="scss"></style>
