<template>
  <div class="breadwarp">
    <el-breadcrumb separator="/">
        <template v-for="item in routerlist"> 
            <el-breadcrumb-item :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
        </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { reactive,ref,computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from 'vuex'
const router = useRouter();
const store = useStore();

const routes = store.state.login.router;
let routerlist: any = computed(() => {
  const path = ref(router.currentRoute.value.fullPath);
  const result = findpath(routes, path.value);
  return result?.map((item) => {
    return {
      path: item.url,
      name: item.name,
    };
  });
});
// let routerlist: Array<{path:any, name:any}> =  reactive([]);
// const path = router.currentRoute.value
// router.beforeResolve((to) => {
//   routerlist.length = 0
//   const path = to.fullPath;
//   const result = findpath(routes, path);
//   result!.forEach((item) => {
//     routerlist.push({
//       path: item.url,
//       name: item.name
//     });
//   });
// });

function findpath(router:any,path:string): Array<any> | undefined {
    for (const item of router) {
        if(item.type == 1){
            const finded = findpath(item.children, path)
            if(finded){
              return [item, finded] 
            }
        }else if(item.type == 2){
            if(item.url == path){
              return item
            }
        }
   }
}

</script>

<style scoped>
.breadwarp {
  margin-left: 20px;
}
</style>