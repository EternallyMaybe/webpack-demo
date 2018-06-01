var path = require('path');
var webpack = requrie('webpack');
var CriticalPlugin = require('html-critical-webpack-plugin');
var PrerenderSpaPlugin = require('prerender-spa-plugin');
var Renderer = PrerenderSpaPlugin.PuppeteerRenderer;
var config = {
    assetsRoot: path.join(__dirname, '../', 'zmhome_admin_dev/zmhome/public'),
    prerenderCames: [],
    prerenderProxyUrl: '' 
}

var CriticalPlugins = config.prerenderCames.map(game => {
    return new CriticalPlugin({
        inline: true,
        base: config.assetsRoot,
        src: `${game}Page.html`,
        width: 1300,
        height: 900,
        timeout: 30000,
        dest: path.join(config.assetsRoot, `${game}Page.html`),
        minify: true,
        extract: true
    });
})

var routes = config.prerenderCames.map(game => `/?gate${game}`);

var webpackConfig = {
    entry: path.join(config.assetsRoot, 'entry/index.js'),
    output: {
        path:  path.join(config.assetsRoot, '/entry'),
        filename: 'entry.js'
    },
    plugins: [
        new  PrerenderSpaPlugin({
            staticDir: config.assetsRoot,
            indexPath: path.join(config.assetsRoot, '/oldPlayerPage.html'),
            outputDir: config.assetsRoot,
            routes: [...routes, '/otherRoute'],
            server: {
                proxy: {
                    '/api': {
                        target: 'http://10.17.64.84:10802/',
                        changeOrigin: false,
                        onProxyRes: function(proxyRes, req, res) {
                            proxyRes.headers['Content-Type'] = 'application/json; charset=utf-8';
                        }
                    }
                }
            },
            postProcess(renderRoute) {
                let regex = /^\/\?gate=(.+)$/;
                let isPage = regex.test(renderRoute.originalRoute);
                let gate = isPage ? renderRoute.originalRoute.replace(regex, '$1') : 'route';
                let file_path = `../../be/staticRoot/dist/${gate}Page.html`;
                renderRoute.outputPath = path.join(config.assetsRoot, `/${gate}Page.html`);
                return renderRoute;
            },
            renderer: new Renderer({
                headless: false,
                devtools: true,
                renderAfterDocumentEvent: 'render-event'
            })
        }),
        ...CriticalPlugins
    ]
}

webpack(webpackConfig, function(err, stats) {
    if (err) throw err; 
});