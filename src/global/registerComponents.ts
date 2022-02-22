import {  ElCard, ElButton } from 'element-plus'
import { App } from 'vue'
export default {
    install(app: App) {
        app.component(ElCard.name,ElCard)
        app.component(ElButton.name,ElButton)
    }
}