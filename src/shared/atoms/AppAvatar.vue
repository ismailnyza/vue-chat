<template>
  <img :style="cssProps" v-bind:src="source" v-bind:alt="altText" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type Size = "small" | "regular" | "tiny";

export default defineComponent({
  name: "app-avatar",
  props: {
    size: String as PropType<Size>,
    isActive: Boolean,
    source: String,
    altText: String,
  },
  computed: {
    cssProps() {
      return {
        "--width":
          this.size === "tiny"
            ? "2rem"
            : this.size === "small"
            ? "2.7rem"
            : "5rem",
      };
    },
  },
});
</script>

<style scoped lang="scss">
img {
  border-radius: 50%;
  width: var(--width);
}
</style>
