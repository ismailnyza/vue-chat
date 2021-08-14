<template>
  <div>
    <app-avatar
      :size="'small'"
      :isActive="isActive"
      :source="contactImage"
      :altText="contactName"
    />
    <div>
      <app-text
        :textType="'title'"
        :isBold="true"
        :isShaded="false"
        :value="contactName"
      />
      <app-text
        :textType="'subtitle'"
        :isBold="false"
        :isShaded="true"
        :value="secondaryText"
      />
    </div>
    <app-text
      :textType="'tiny-text'"
      :isBold="false"
      :isShaded="true"
      :value="timestamp"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppAvatar from "@/components/atoms/AppAvatar.vue";
import AppText from "@/components/atoms/AppText.vue";

export default defineComponent({
  name: "contact",
  props: {
    contactName: String,
    secondaryText: String,
    timestamp: String,
    contactImage: String,
    isActive: Boolean,
    isSelected: Boolean,
  },
  components: {
    AppAvatar,
    AppText,
  },
});
</script>

<style scoped lang="scss"></style>
