<template>
  <div class="contact-card">
    <div class="avatar-container">
      <app-avatar
        size="small"
        :isActive="isActive"
        :source="contactImage"
        :altText="contactName"
      />
    </div>
    <div class="name-container">
      <div>
        <app-text
          textType="title"
          :isBold="true"
          :isShaded="false"
          :value="contactName"
          class="name"
        />
        <app-text
          textType="subtitle"
          :isBold="false"
          :isShaded="false"
          :value="secondaryText"
          class="secondary-text"
        />
      </div>
    </div>
    <div class="time-container">
      <app-text
        textType="tiny-text"
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
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 20px;
  background: rgb(231, 227, 227);

  .name-container {
    text-align: left;
    margin-left: 0.5em;
    width: 60%;
    overflow: hidden;

    .name {
      margin: 0.2em;
    }

    .secondary-text {
      margin: 0.2em;
    }
  }
}
</style>
