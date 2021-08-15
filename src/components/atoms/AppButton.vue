<template>
  <button :style="cssProps">
    <slot>{{ value }}</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type Size = "small" | "regular" | "tiny";

export default defineComponent({
  name: "app-button",
  props: {
    size: String as PropType<Size>,
    value: String,
    nobackground: Boolean,
  },
  computed: {
    cssProps() {
      let fontSize = "1.1rem";
      let backgroundColor = "#bfe7e2";
      switch (this.size) {
        case "regular":
          fontSize = "1.3rem";
          break;
        case "small":
          fontSize = "0.9rem";
          break;
        case "tiny":
          fontSize = "100rem";
          break;
      }
      if (this.nobackground == true) {
        backgroundColor = "transparent";
      }
      return {
        "--fontSize": fontSize,
        "--backgroundColour": backgroundColor,
      };
    },
  },
});
</script>

<style scoped lang="scss">
button {
  font-size: var(--fontSize);
  background-color: var(--backgroundColour);
  border-radius: 25px;
  border-style: none;
  color: #01a38b;
  font-weight: bold;
  padding: 1.3%;
  width: 180px;
}
</style>
