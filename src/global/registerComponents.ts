import {
    ElCard,
    ElButton,
    ElTabs,
    ElTabPane,
    ElForm,
    ElFormItem,
    ElInput,
    ElLink,
    ElRadio,
    ElCheckbox,
    ElContainer,
    ElMain,
    ElAside,
    ElHeader,
    ElFooter,
    ElIcon,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElSubMenu
} from 'element-plus'
import { App } from 'vue'
export default {
    install(app: App) {
        app.component(ElCard.name, ElCard)
        app.component(ElButton.name, ElButton)
        app.component(ElTabs.name, ElTabs)
        app.component(ElTabPane.name, ElTabPane)
        app.component(ElForm.name, ElForm)
        app.component(ElFormItem.name, ElFormItem)
        app.component(ElInput.name, ElInput)
        app.component(ElLink.name, ElLink)
        app.component(ElRadio.name, ElRadio)
        app.component(ElCheckbox.name, ElCheckbox)
        app.component(ElContainer.name, ElContainer)
        app.component(ElMain.name, ElMain)
        app.component(ElAside.name, ElAside)
        app.component(ElHeader.name, ElHeader)
        app.component(ElFooter.name, ElFooter)
        app.component(ElIcon.name, ElIcon)
        app.component(ElMenu.name, ElMenu)
        app.component(ElMenuItem.name, ElMenuItem)
        app.component(ElMenuItemGroup.name, ElMenuItemGroup)
        app.component(ElSubMenu.name, ElSubMenu)
    }
}