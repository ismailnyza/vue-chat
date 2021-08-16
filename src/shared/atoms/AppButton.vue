<template>
  <button>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type Size = "small" | "regular" | "tiny";

export default defineComponent({
  name: "app-button",
  props: {
    isColored: Boolean,
    size: String as PropType<Size>,
  },
});
</script>

<style scoped lang="scss"></style>
