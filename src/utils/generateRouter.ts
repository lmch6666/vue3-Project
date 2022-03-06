import { RouteRecordRaw } from 'vue-router'

export function generate(usermenu: any[]): RouteRecordRaw[] {
    const result: RouteRecordRaw[] = []
    const routers: any[] = []
    // vite
    const im = import.meta.globEager('../router/main/**/**.ts')
    for (const key in im) {
        routers.push(im[key].default)
    }
    // 安装 @types/webpack-env 解决require.context报错问题
    // vue-cli webpack方案
    // const files = require.context('../router/main', true, /.ts$/)
    //     files.keys().forEach((path) => {
    //         console.log(path);
    //     })

    function filter(usermenu: any[]) {
        for (const item of usermenu) {
            if (item.type == 2) {
                const res = routers.find((router) => {
                    return router.path == item.url
                })
                if (res) {
                    result.push(res)
                }
            } else {
                filter(item.children)
            }
        }
    }
    filter(usermenu)
    return result
}

