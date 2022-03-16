<template>
  <Content :tableData="tableData" :tableconfig="tableconfig" pagename="system:department" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Content } from "../../../../components/index";
import { tableconfig } from "./department.config";
import { useStore } from "vuex";

const store = useStore();
const tableData = computed(() => store.state.departments);
</script>

<style>
</style>
