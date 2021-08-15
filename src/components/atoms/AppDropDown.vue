<template>
  <select v-bind:name="name" v-bind:id="id" :style="css">
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
  computed: {
    cssProps() {
      // here
      let backgroundColor = "green";
      switch (this.selectedOption) {
        case "Active":
          backgroundColor = "green";
          break;
        case "Offline":
          backgroundColor = "grey";
          break;
        case "Busy":
          backgroundColor = "#ffffff";
          break;
      }
      return {
        "--backgroundColour": backgroundColor,
      };
    },
  },
});
</script>

<style scoped lang="scss">
select {
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  outline: none;
  border: none;
  appearance: none;
  text-align-last: center;
  background-color: #bfe7e2;
  color: #01a38b;
  font-weight: bold;
}
</style>
