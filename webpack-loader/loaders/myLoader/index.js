const LoaderUtils = require('loader-utils');
const validateOptions = require('schema-utils');
const schema = require('./options.json');

module.exports = function(source) {
    const options = LoaderUtils.getOptions(this);
    validateOptions(schema, options, {
        name: 'my loaders',
        baseDataPath: 'options'
    });

    const callback = this.async();
    setTimeout(() => {
        callback(null, 'test');
    }, 2000)
}