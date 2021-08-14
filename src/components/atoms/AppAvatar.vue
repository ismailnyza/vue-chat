<template>
  <img :src="source" :alt="altText" />
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
});
</script>

<style scoped lang="scss">
img {
  border-radius: 50%;
}
</style>
