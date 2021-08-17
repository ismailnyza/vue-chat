<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <side-menu />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SideMenu from "@/views/SideMenu.vue";

@Options({
  components: {
    SideMenu,
  },
})
export default class Home extends Vue {}
</script>
