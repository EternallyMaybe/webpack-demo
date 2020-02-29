function MyPlugins(options) {
    this.options = options;
}

MyPlugins.prototype.apply = function(compiler) {
    compiler.plugin('done', function(compilation) {
        console.log('hello world');
    })
}

module.exports = MyPlugins;