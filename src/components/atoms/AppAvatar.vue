<template>
  <img v-bind:src="source" alt="" srcset="" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-avatar",
  props: {
    size: String, // small, regular, tiny
    isActive: Boolean,
    source: String,
  },
});
</script>

<style scoped lang="scss"></style>
