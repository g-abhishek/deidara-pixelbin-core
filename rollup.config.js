import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

const packageJson = require("./package.json");

export default {
    external: ["axios", "core-js", "regenerator-runtime"],
    input: "pixelbin.js",
    output: [{
        file: packageJson.main,
        format: "cjs",
        exports: 'named',
        sourcemap: true,
        strict: false
    }],
    
    plugins: [nodeResolve(), babel({ babelHelpers: "bundled"})]
}