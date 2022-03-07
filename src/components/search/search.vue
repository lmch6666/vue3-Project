<template>
  <div class="search">
    <Mform v-bind="formconfig" v-model="form"></Mform>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps } from "vue";
import { Mform } from "../../base-ui/index";

defineProps({
  formconfig: {
    type: Object,
    default: () => ({}),
  },
  form:{
      type:Object,
      default: () => ({})
  }
});
</script>

<style scoped>
</style>