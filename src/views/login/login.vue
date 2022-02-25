<template>
  <div class='login'>
    <Panel></Panel> 
  </div>
</template>

<script setup lang='ts'>
import Panel from './panel.vue'
</script>

<style>
  .login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    transform:  translateY(-20%);
  }
</style>