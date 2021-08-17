<template>
  <input type="text" name="" id="" :placeholder="placeholder" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-input",
  props: {
    placeholder: String,
  },
});
</script>

<style scoped lang="scss">
input {
  border: none;
  background-color: #f0f3f6;
  border-radius: 25px;
  padding: 0.4%, 5%, 5%, 0%;
  font-size: 24px;
}
</style>
