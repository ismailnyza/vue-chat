<template>
  <p>{{ value }}</p>
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
});
</script>

<style scoped lang="scss">
p {
  margin: 0%;
  margin-left: 1%;
}
</style>
