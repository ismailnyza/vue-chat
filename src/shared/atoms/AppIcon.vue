<template>
  <img :src="`https://unpkg.com/ionicons@5.5.2/dist/svg/${name}.svg`" />
</template>

<script lang="js">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    }
  }
});
</script>

<style scoped lang="scss">
img {
  height: 25px;
  filter: opacity(30%);
}
</style>
