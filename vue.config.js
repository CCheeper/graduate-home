module.exports = {
    devServer: {
        host: "localhost",
        port: 8083, // 端口号
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        hotOnly: true, // 热更新
        proxy: 'http://localhost:8002'   // 配置跨域处理,只有一个代理
        // proxy: { //配置多个跨域
        //     "/": {
        //         target: "http://localhost:8002",
        //         changeOrigin: true,
        //          ws: false,//websocket支持
        //         secure: false,
        //         pathRewrite: {
        //             "^/": "/"
        //         }
        //     }
        // }
    }
}