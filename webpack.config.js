import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
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
