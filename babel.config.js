module.exports = {
    plugins:[
        [
            'import',
            {
                libraryName: 'element-plus',
                customStyleName: (name) => {
                    return `element-plus/theme-chalk/${name}.css`
                }
            }
        ]
    ]
}