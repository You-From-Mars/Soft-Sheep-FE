module.exports = {
    devServer: {
        // 设置主机地址
        host: 'localhost',
        // 设置默认端口
        port: 8082,
        open: true,
        // 设置代理
        proxy: {
            '/softsheep': {
                // 目标 API 地址
                target: 'http://localhost:8080',
                // 如果要代理 websockets
                ws: true,
                // 将主机标头的原点更改为目标URL
                changeOrigin: true,
            }
        }
    },
    // chainWebpack: (config) => {
    //     // 路径别名
    //     config.resolve.alias
    //         .set('@', resolve('src'))
    //         .set('utils', resolve('src/utils'))
    //         .set('assets', resolve('src/assets'))
    //         .set('components', resolve('src/components'))
    // },
}