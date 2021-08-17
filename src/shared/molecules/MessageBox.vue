<template>
  <div class="card">
    <div
      class="message-box"
      contenteditable="true"
      @keydown.enter="onSubmit"
    ></div>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";

export default {
  name: "message-box",
  props: {},
  setup(): {
    textBox: { value: string };
    onSubmit: (event: Event) => void;
    onEdit: (event: Event) => void;
  } {
    const textBox = reactive({ value: "" });

    const onEdit = (event: Event) => {
      console.log((event.target as HTMLDivElement).innerText);
    };

    const onSubmit = (event: Event) => {
      console.log((event.target as HTMLDivElement).innerText);
      (event.target as HTMLDivElement).innerText = "";
    };
    return { textBox, onSubmit, onEdit };
  },
};
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  background: rgb(155, 100, 100);
  box-shadow: 0 6px 10px -5px rgba(0, 0, 0, 0.2);
  height: fit-content;
}
</style>
