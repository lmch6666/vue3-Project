<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

// "abc"  -> value:"abc"
// "[abc[def[ghi]]]" -> {value: abc, children: {value: def, children: {value: ghi}}}
let str = 'abc'
let str1 = "[abc[def[ghi]]]"


function jiegouhuashuju(str:string) {
  let obj = {}
  let result = obj
  let arr = str1.split(/\[|\]/).filter((str) => {
    return str != ''
  })
  function digui(str) {
    result["value"] = str
    if(arr.length = 1){
      return obj;
    }
    result["children"] = {}
    result = result["children"]
  }
  if(arr.length > 1 ){
    for(let i = arr.length; i > 0; i--){
      digui(arr.shift())
    }
  } else {
    return {value: arr.shift()}
  }
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
