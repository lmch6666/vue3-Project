        RBAC 权限设计 : 动态路由
    为不同的角色 提供不同的菜单功能


方案1 : 有一个白名单 和 黑名单 白名单包含默认路由, 黑名单包含权限路由  然后根据返回角色权限信息从黑名单路由中筛选路由与白名单路由组合
方案2 : 后台直接返回角色数据和对应的路由数据 , 然后根据权限来动态生成路由表(具体有后台数据返回)
        1.一个是 直接 自己遍历生成 路由   
        2. 是创建路由的配置 动态导入