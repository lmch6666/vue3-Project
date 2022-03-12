import type { App } from "vue";


export default function (app: App) {
    // app.config.globalProperties定义全局的属性
    app.config.globalProperties.$filter = {
        formatTime(str: any) {
            str = str?.replace(/(AM)|(PM)/g, function (i: any) {
                 return ''
            });
            return new Date(str).toLocaleString().replaceAll(/\//g, '-')
        }
    }
}
