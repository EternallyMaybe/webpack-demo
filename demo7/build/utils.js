const path = require('path');
const config = require('./config');

module.exports = {
    assetsPath(_path) {
        var assetsSubDiretory = process.env.NODE_ENV === 'production' 
        ? config.dev.assetsSubDiretory 
        : config.build.assetsSubDiretory;

        return path.join(assetsSubDiretory, _path);
    },
    resolve(_path) {
        return path.resolve(__dirname, '../', _path);
    }
}