<template>
  <div class="table">
    <el-table :data="tableData" style="width: 100%">
      <template v-for="item in tableconfig" :key="item.label">
        <el-table-column
          align="center"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
          <!-- 通过内部放置一个slot的方式  ,来让外部来判断是否对某些列进行操作处理 -->
          <template #default="{ row }">
            <slot :name="item.slotName" :row="row">
              {{ row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
      <el-table-column label="Operations" width="180" align="center">
        <template #default>
          <el-button type="text" size="small" @click="handleClick"
            >详细</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps, defineEmits } from "vue";

defineProps({
  tableData: {
    required: true,
    default: () => [],
  },
  tableconfig: {
    required: true,
    default: () => [],
  },
});
function handleClick(params: any) {}
</script>

<style scoped>
.table {
  padding-top: 40px;
}
</style>