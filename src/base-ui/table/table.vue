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
        <template #default>
          <el-button type="text" size="small" @click="edit">编辑</el-button>
          <el-button type="text" size="small" @click="del">删除</el-button>
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
} from "vue";

const instance = getCurrentInstance();
const emit = defineEmits(["selectchange"]);
defineProps({
  tableData: {
    required: true,
    default: () => [],
  },
  tableconfig: {
    required: true,
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
    default: true
  },
});

const pagesize = ref(10);
const treeset = ref();
const tabletreeconfig = inject("tabletreeconfig");
if (tabletreeconfig) {
  treeset.value = tabletreeconfig;
}
function edit(value: any) {}

function del(params: any) {}

function handleselectchange(value: any) {
  emit("selectchange", value);
}

function handleCurrentChange(value: any) {
  console.log("currentpage", value);
  getfatherMethod(value);
}

function handleSizeChange(value: any) {
  console.log("sizechange", value);
  pagesize.value = value;
  getfatherMethod();
}

function handlePrevClick(value: any) {
  console.log("PrevClick", value);
  getfatherMethod(value);
}

function handleNextClick(value: any) {
  console.log("NextClick", value);
  getfatherMethod(value);
}

function getfatherMethod(value?: number, size?: number) {
  let currentpagenumber = value;
  const method = instance?.parent?.parent?.setupState?.getUserlistDate;
  if (method) {
    return method(currentpagenumber, undefined, pagesize.value);
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