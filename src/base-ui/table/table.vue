<template>
  <div class="table">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      @selection-change="handleselectchange"
      v-bind="treeset"
    >
      <el-table-column v-if="showcheckbox" type="selection" width="55" />
      <el-table-column
        v-if="showIndex"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
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
      <el-table-column label="操作" width="220" align="center">
        <template #default="{row}">
          <el-button v-if="isedit" type="text" size="small" @click="edit(row)"
            >编辑</el-button
          >
          <el-button v-if="isdel" type="text" size="small" @click="del(row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="footer" v-if="isshowfooter">
      <slot name="footer">
        <el-row justify="center">
          <el-col :span="24">
            <el-pagination
              background
              :page-sizes="[10, 20]"
              layout="total, sizes, prev, pager, next, jumper"
              :total="count"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              @prev-click="handlePrevClick"
              @next-click="handleNextClick"
            >
            </el-pagination>
          </el-col>
        </el-row>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  defineProps,
  defineEmits,
  getCurrentInstance,
  inject,
  PropType,
} from "vue";
import type {Component} from './type'
const instance = getCurrentInstance();
const emit = defineEmits(["selectchange",'edit','del']);
const props = defineProps({
  tableData: {
    required: true,
    type: Array as PropType<Array<any>>,
    default: () => [],
  },
  tableconfig: {
    required: true,
    type: Array as PropType<Array<any>>,
    default: () => [],
  },
  showIndex: {
    type: Boolean,
    default: false,
  },
  showcheckbox: {
    type: Boolean,
    default: false,
  },
  count: {
    type: Number,
  },
  isshowfooter: {
    type: Boolean,
    default: true,
  },
  isedit: {
    type: Boolean,
    required: true,
    default: false
  },
  isdel: {
    type: Boolean,
    required: true,
    default: false
  },
});

const pagesize = ref(10);
const treeset = ref();
const tabletreeconfig = inject("tabletreeconfig");
if (tabletreeconfig) {
  treeset.value = tabletreeconfig;
}
function edit(value: any) {
  emit('edit',value)
}

function del(value: any) {
  emit('del',value.id)
}

function handleselectchange(value: any) {
  emit("selectchange", value);
}

function handleCurrentChange(value: any) {
  getfatherMethod(value);
}

function handleSizeChange(value: any) {
  pagesize.value = value;
  getfatherMethod();
}

function handlePrevClick(value: any) {
  getfatherMethod(value);
}

function handleNextClick(value: any) {
  getfatherMethod(value);
}

function getfatherMethod(value?: number, size?: number) {
  let currentpagenumber = value;
  const parents:Component | null | undefined = instance?.parent?.parent;
  const method = parents?.setupState?.getUserlistDate
  if (method) {
    return method(currentpagenumber, pagesize.value);
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
}

.table {
  padding-top: 40px;
}

.footer {
  display: flex;
  justify-content: center;
  margin: 20px 0px;
}
</style>
