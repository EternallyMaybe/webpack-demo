module.exports = {
    dev: {
        assetsSubDiretory: './static'
    },
    build: {
        assetsSubDiretory: './static',
        // 启用多线程进行打包
        happypack: {
            open: false,
            threadPoolSize: 5
        },
        // 查看打包结果依赖分析
        bundleAnalyzerReport: false,
        // PWA
        openPWA: true
    }
}