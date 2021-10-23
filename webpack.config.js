const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    devtool: false,

    output: {
        path: path.resolve(__dirname, 'dist'),
    },

    resolve: {
        extensions: [".js"]
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'data') + '/data.json', to: path.resolve(__dirname, 'dist') + '/data.json' }
            ]
        })
    ]
};
