<template>
  <div class="search-container">
    <app-input placeholder="Search..." />
  </div>
  <div class="contacts-container">
    <div v-for="contact in contacts" :key="contact.contactId">
      <contact-item
        :contactImage="contact.contactImage"
        :secondaryText="contact.lastContactDetails.textMessage"
        :timestamp="getReadableTime(contact.lastContactDetails.timestamp)"
        :contactName="contact.contactName"
        :isActive="true"
        :isSelected="false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ContactItem from "@/shared/molecules/ContactItem.vue";
import AppInput from "@/shared/atoms/AppInput.vue";
import { Contact } from "@/models/interfaces";
import { getReadableTime } from "@/helpers";

export default defineComponent({
  name: "contacts-list",
  props: {
    contacts: Array as PropType<Contact[]>,
  },
  components: {
    ContactItem,
    AppInput,
  },
  methods: {
    getReadableTime,
  },
});
</script>

<style scoped lang="scss">
.profile-container {
  display: grid;
  grid-row-gap: 2px;
}
</style>
