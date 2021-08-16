<template>
  <div class="container">
    <h1>Hello world</h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
});
</script>

<style lang="scss">
@import "src/assets/_global.scss";

.container {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
</style>
