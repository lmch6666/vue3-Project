<template>
  <div class="nav-header">
    <div class="icon">
      <el-icon :size="20" color="#000" class="icon-point" @click="changeIcon">
        <template v-if="flag">
          <Fold />
        </template>
        <template v-else>
          <Expand />
        </template>
      </el-icon>
    </div>
    
    <div class="nav-main">
      <span class="bread"> 
        <Bread />
      </span>
      <div class="user">
        <User/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineEmits, defineProps } from "vue";
import { Expand, Fold } from "@element-plus/icons-vue";
import Bread from './bread.vue'
import User from './user.vue'
const props = defineProps({
  flag: Boolean,
});
const emits = defineEmits(["changeIcon"]);
const flag = ref(false);

function changeIcon() {
  flag.value = !flag.value;
  emits("changeIcon", flag.value);
}
</script>

<style scoped>
.nav-header {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
}

.icon-point {
  cursor: pointer;
}

.nav-main {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}
</style>