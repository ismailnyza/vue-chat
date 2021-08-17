<template>
  <div id="nav">
    <side-menu />
  </div>
  <router-view class="main" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideMenu from "@/views/SideMenu.vue";

export default defineComponent({
  components: {
    SideMenu,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  overflow-x: hidden;

  a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    color: #000000;
    display: block;
  }

  a:hover {
    color: #1a1818;
  }
}

.main {
  margin-left: 160px;
  padding: 0px 0px;
  height: 100%;
  border-radius: 10px;
  border-left: 1px solid;
  border-color: rgb(87, 87, 87);
}
body {
  padding: 1%;
}
</style>
