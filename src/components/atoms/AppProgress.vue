<template>
  {{ value }} %
  <progress value="80" max="100"></progress>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-progress",
  props: {
    value: Number,
  },
});
</script>

<style scoped lang="scss">
progress {
  height: 10px;
  display: inline;
}
</style>
