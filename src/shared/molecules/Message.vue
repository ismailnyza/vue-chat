<template>
  <div>
    <app-text
      v-if="!!contactName"
      :textType="'tiny-text'"
      :isBold="false"
      :isShaded="false"
      :value="contactName"
    />
    <app-text
      v-if="!!timestamp"
      :textType="'tiny-text'"
      :isBold="false"
      :isShaded="false"
      :value="timestamp"
    />
  </div>
  <div>
    <app-avatar
      :size="'tiny'"
      :isActive="isActive"
      :source="contactImage"
      :altText="contactName"
    />
    <div>
      <app-text
        :textType="'message'"
        :isBold="false"
        :isShaded="false"
        :value="message"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppAvatar from "@/shared/atoms/AppAvatar.vue";
import AppText from "@/shared/atoms/AppText.vue";

export default defineComponent({
  name: "message",
  props: {
    contactImage: String,
    message: String,
    isActive: Boolean,
    contactName: String,
    timestamp: String,
  },
  components: {
    AppAvatar,
    AppText,
  },
});
</script>

<style scoped lang="scss"></style>
