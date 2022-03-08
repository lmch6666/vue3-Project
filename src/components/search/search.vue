<template>
  <div class="search">
    <Mform v-bind="formconfig" v-model="form"></Mform>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps, watch, defineEmits, defineExpose,computed } from "vue";
import { Mform } from "../../base-ui/index";
const emits = defineEmits(['updateData'])
const props = defineProps({
  formconfig: {
    type: Object,
    default: () => ({}),
  },
  form: {
    type: Object,
    default: () => ({}),
  },
});

const userdata = computed(() => {
  return props.form
})


defineExpose({
  userdata
})

</script>

<style scoped>
.search {
  padding: 30px 100px;
}
</style>