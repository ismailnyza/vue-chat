<template>
  <select
    v-bind:name="name"
    v-bind:id="id"
    :value="selectedOption"
    @change="onChangeValue"
  >
    <!-- add colors according to the status -->
    <option v-for="option in options" :key="option" v-bind:value="option">
      {{ option }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  name: "app-progress",
  props: {
    selectedOption: String,
    options: Array as PropType<string[]>,
    name: String,
    id: String,
  },
  setup(props, context) {
    const currentValue = ref<string>();

    const onChangeValue = (event: { target: { value: string } }) => {
      context.emit("onChangeValue", event.target.value);
    };

    return { currentValue, onChangeValue };
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
