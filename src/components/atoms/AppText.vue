<template>
  <p :style="cssProps">{{ value }}</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type TextType = "header" | "title" | "subtitle" | "message" | "tiny-text";

export default defineComponent({
  name: "app-text",
  props: {
    value: String,
    isBold: Boolean,
    isShaded: Boolean,
    textType: String as PropType<TextType>,
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

<style scoped lang="scss">
p {
  font-weight: var(--isBold);
  background-color: var(--isShaded);
  font-size: var(--fontSize);
}
</style>
