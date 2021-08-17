<template>
  <div class="contact-card">
    <div class="avatar-container">
      <app-avatar
        :size="'small'"
        :isActive="isActive"
        :source="contactImage"
        :altText="contactName"
      />
    </div>
    <div>
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
          :isShaded="false"
          :value="secondaryText"
        />
      </div>
      <app-text
        :textType="'tiny-text'"
        :isBold="false"
        :isShaded="false"
        :value="timestamp"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppAvatar from "@/shared/atoms/AppAvatar.vue";
import AppText from "@/shared/atoms/AppText.vue";

export default defineComponent({
  name: "contact-item",
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

<style scoped lang="scss">
.contact-card {
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 5px;
}

avatar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
}
</style>
