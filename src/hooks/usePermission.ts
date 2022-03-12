import { login } from "@/service/login";
import { useStore } from "vuex";



export function usePermission(str: string, auth: string) {
  const store = useStore();
  const list = store.state.login.permissionlist;

  let key = `${str}:${auth}`
  return list.includes(key)
}
