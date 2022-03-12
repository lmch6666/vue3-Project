import { reactive, ref,nextTick } from 'vue'


const map: any = {}

export function savedata(str: string, value: any) {
  map[str] = value
}

export function getdata(str: string) {
  return map[str]
}

