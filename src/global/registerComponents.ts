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
    ElSubMenu,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElAvatar,
    ElCol,
    ElRow,
    ElDatePicker,
    ElSelect,
    ElOption,
    ElTable,
    ElTableColumn,
    ElTag
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
        app.component(ElBreadcrumb.name, ElBreadcrumb)
        app.component(ElBreadcrumbItem.name, ElBreadcrumbItem)
        app.component(ElDropdown.name, ElDropdown)
        app.component(ElDropdownItem.name, ElDropdownItem)
        app.component(ElDropdownMenu.name, ElDropdownMenu)
        app.component(ElAvatar.name, ElAvatar)
        app.component(ElCol.name, ElCol)
        app.component(ElRow.name, ElRow)
        app.component(ElDatePicker.name, ElDatePicker)
        app.component(ElSelect.name, ElSelect)
        app.component(ElOption.name, ElOption)
        app.component(ElTable.name, ElTable)
        app.component(ElTableColumn.name, ElTableColumn)
        app.component(ElTag.name, ElTag)
    }
}