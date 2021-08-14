<template>
  <select v-bind:name="name" v-bind:id="id">
    <option v-for="option in options" :key="option" v-bind:value="option">
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "app-progress",
  props: {
    selectedOption: String,
    options: Array as PropType<string[]>,
    name: String,
    id: String,
  },
});
</script>

<style scoped lang="scss"></style>
