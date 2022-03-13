<template>
  <div>
    <Mtable
      :tableData="tableData"
      :tableconfig="tableconfig"
      @selectchange="handleselectchange"
      :count="count"
      :isedit="isedit"
      :isdel="isdel"
      @edit="edit"
      @del="del"
    >
      <!-- header插槽 -->
      <template #header>
        <el-row justify="end">
          <el-col :span="24">
            <slot name="btnposition"></slot>
          </el-col>
        </el-row>
      </template>
      <!-- 列表中的插槽 -->
      <template #enable="{ row }">
        <template v-if="row.enable">
          <el-tag
            class="ml-2"
            :type="
              row.enable == 1
                ? 'success'
                : row.enable == 2
                ? 'danger'
                : 'warning'
            "
          >
            {{ row.enable == 1 ? "启用" : row.enable == 2 ? "未启用" : "默认" }}
          </el-tag>
        </template>
      </template>

      <template #createAt="{ row }">
        {{ $filter.formatTime(row.createAt) }}
      </template>
      <template #updateAt="{ row }">
        {{ $filter.formatTime(row.updateAt) }}
      </template>

      <template
        v-for="item in otherslots"
        :key="item.slotName"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </Mtable>
  </div>
</template>

<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  defineExpose,
  getCurrentInstance,
} from "vue";
import { Mtable } from "../../base-ui/index";
import {usePermission} from '../../hooks/usePermission'
const instance = getCurrentInstance();
const $filter = instance?.appContext.config.globalProperties.$filter;
const exposes = instance?.parent?.exposed;
const emit  = defineEmits(['totaldelete']);
const props = defineProps({
  tableData: {
    required: true,
    default: () => [],
  },
  tableconfig: {
    required: true,
    type: Array,
    default: () => [],
  },
  showIndex: {
    type: Boolean,
    default: false
  },
  showcheckbox: {
    type: Boolean,
    default: false
  },
  count: {
    type: Number
  },
  pagename: {
    type: String
  }
});

const isedit = usePermission(props.pagename!,'update')
const isdel = usePermission(props.pagename!,'delete')

function handleselectchange(val: any) {
  emit('totaldelete',val)
}

function edit(value:any) {
  // console.log(value);
  exposes!.edit(value)
}
function del(value:any) {
  exposes!.del(value)
}

// 过滤公共的一些插槽 留下特殊的
const otherslots: Array<any> = props.tableconfig.filter((item: any) => {
  if (item.slotName == "enable") {
    return false;
  }
  if (item.slotName == "createAt") {
    return false;
  }
  if (item.slotName == "updateAt") {
    return false;
  }
  return true;
});
</script>

<style scoped>
</style>
