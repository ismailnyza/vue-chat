<template>
  <button :style="cssProps">
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
  computed: {
    cssProps() {
      let fontSize;
      switch (this.textType) {
        case "header":
          fontSize = "1.3rem";
          break;
        case "title":
          fontSize = "0.9rem";
          break;
        case "subtitle":
          fontSize = "0.7rem";
          break;
        case "message":
          fontSize = "0.85rem";
          break;
        case "tiny-text":
          fontSize = "0.7rem";
          break;
        default:
          fontSize = "1rem";
      }

      return {
        "--isBold": this.isBold && "bold",
        "--isShaded": this.isShaded && "#ddd",
        "--fontSize": fontSize,
      };
    },
  },
});
</script>

<style scoped lang="scss"></style>
