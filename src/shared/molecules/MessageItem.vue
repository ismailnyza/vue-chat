<template>
  <div class="message">
    <div :class="isCurrentUser ? 'self' : 'other'">
      <app-avatar
        :size="'tiny'"
        :isActive="isActive"
        :source="contactImage"
        :altText="contactName"
        class="avatar"
      />
      <app-text
        v-if="!!contactName"
        :textType="'tiny-text'"
        :isBold="false"
        :isShaded="false"
        :value="contactName"
      />
    </div>
    <div>
      <div class="text-message">
        <app-text
          :textType="'message'"
          :isBold="false"
          :isShaded="false"
          :value="message"
        />
        <app-text
          v-if="!!timestamp"
          :textType="'tiny-text'"
          :isBold="false"
          :isShaded="false"
          :value="timestamp"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppAvatar from "@/shared/atoms/AppAvatar.vue";
import AppText from "@/shared/atoms/AppText.vue";

export default defineComponent({
  name: "message-item",
  props: {
    contactImage: String,
    message: String,
    isActive: Boolean,
    contactName: String,
    timestamp: String,
    isCurrentUser: Boolean,
  },
  components: {
    AppAvatar,
    AppText,
  },
});
</script>

<style scoped lang="scss">
.message {
  padding: 0.5rem;
  overflow: hidden;
  display: flex;

  .avatar {
    position: relative;
    display: block;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.9);
  }

  .other {
    .text-message {
      order: 1;
      border-top-left-radius: 0px;
      box-shadow: -1px 2px 0px #d4d4d4;
    }

    ::before {
      content: "";
      position: relative;
      top: 0px;
      right: 0px;
      left: 40px;
      width: 0px;
      height: 0px;
      border: 5px solid #fff;
      border-left-color: transparent;
      border-bottom-color: transparent;
    }
  }

  .self {
    justify-content: flex-end;
    align-items: flex-end;

    .text-message {
      order: 1;
      border-bottom-right-radius: 0px;
      box-shadow: 1px 2px 0px #d4d4d4;
    }

    .avatar {
      order: 2;

      ::after {
        content: "";
        position: relative;
        display: inline-block;
        bottom: 19px;
        right: 0px;
        width: 0px;
        height: 0px;
        border: 5px solid #fff;
        border-right-color: transparent;
        border-top-color: transparent;
        box-shadow: 0px 2px 0px #d4d4d4;
      }
    }
  }

  .text-message {
    background: white;
    min-width: 50px;
    padding: 10px;
    border-radius: 2px;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.07);
  }
}
</style>
