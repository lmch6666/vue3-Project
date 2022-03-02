<template>
  <div class="nav-header">
    <el-icon :size="20" color="#000" class="icon-point" @click="changeIcon">
        <template v-if="flag">
            <Fold />
        </template>
        <template v-else>
            <Expand />
        </template>
    </el-icon>
    <!-- <span>面包</span> -->
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, defineEmits, defineProps} from 'vue';
import { Expand, Fold } from "@element-plus/icons-vue";


const props = defineProps({
    flag: Boolean
})
const emits = defineEmits(['changeIcon'])
const flag = ref(false)

function changeIcon(){
    flag.value = !flag.value;
    emits('changeIcon', flag.value)
}
</script>

<style scoped>
.nav-header {
}

.icon-point {
  cursor: pointer;
}
</style>