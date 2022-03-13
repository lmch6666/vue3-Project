import type {ComponentInternalInstance} from 'vue'

export interface Component extends ComponentInternalInstance{
  setupState?: any
}
