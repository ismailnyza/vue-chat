<template>
  <div class="logo">
    <app-avatar
      size="regular"
      :isActive="false"
      source="https://i.pinimg.com/originals/60/d4/d3/60d4d31e4f2b18abaee11da6281ff6ea.png"
      altText="logo image"
    />
  </div>
  <div class="route-list">
    <router-link v-for="route in routes" :key="route.route" :to="route.route">
      <app-icon :name="route.iconName" />
    </router-link>
  </div>
  <div class="profile-image">
    <app-avatar
      size="small"
      :isActive="true"
      source="https://www.w3schools.com/howto/img_avatar.png"
      altText="logo image"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AppIcon from "@/shared/atoms/AppIcon.vue";
import AppAvatar from "@/shared/atoms/AppAvatar.vue";
import { Route } from "@/models/interfaces";

@Options({
  components: {
    AppIcon,
    AppAvatar,
  },
})
export default class SideMenu extends Vue {
  routes: Route[] = [
    {
      iconName: "home",
      route: "/",
    },
    {
      iconName: "people",
      route: "/chat",
    },
    {
      iconName: "information-circle",
      route: "/about",
    },
    {
      iconName: "videocam",
      route: "/video",
    },
  ];
}
</script>

<style lang="scss">
.route-list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.profile-image {
}
</style>
