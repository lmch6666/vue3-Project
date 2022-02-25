import {  ElCard, ElButton,ElTabs,ElTabPane,ElForm,ElFormItem,ElInput,ElLink,ElRadio, ElCheckbox } from 'element-plus'
import { App } from 'vue'
export default {
    install(app: App) {
        app.component(ElCard.name,ElCard)
        app.component(ElButton.name,ElButton)
        app.component(ElTabs.name,ElTabs)
        app.component(ElTabPane.name,ElTabPane)
        app.component(ElForm.name,ElForm)
        app.component(ElFormItem.name,ElFormItem)
        app.component(ElInput.name,ElInput)
        app.component(ElLink.name,ElLink)
        app.component(ElRadio.name,ElRadio)
        app.component(ElCheckbox.name,ElCheckbox)
    }
}