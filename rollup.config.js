import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';

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
    },{
        file: packageJson.module,
        format: "esm",
        exports: 'named',
        sourcemap: true,
        strict: false
    }],
    
    plugins: [nodeResolve(), babel({ babelHelpers: "bundled"})]
}