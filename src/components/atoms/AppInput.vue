<template>
  <input type="text" name="" id="" placeholder="search" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-input",
  props: {},
});
</script>

<style scoped lang="scss">
input {
  margin: 2%;
  border-radius: 25px;
  border-style: none;
  background-color: #f0f3f6;
  padding: 10px;
  padding-left: 25px;
  color: #a6adc1;
}
::placeholder {
  color: #a6adc1;
}
</style>
