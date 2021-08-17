<template>
  <div>
    <app-icon name="people" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AppIcon from "@/shared/atoms/AppIcon.vue";

@Options({
  components: {
    AppIcon,
  },
})
export default class SideMenu extends Vue {}
</script>
