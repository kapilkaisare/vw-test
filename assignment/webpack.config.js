let path = require('path');

module.exports = {
    entry: {
        'app': './src/main.ts'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}