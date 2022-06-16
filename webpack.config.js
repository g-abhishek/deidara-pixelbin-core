const path = require("path");

const config =  {
  externals: {
    axios: "axios",
    "core-js": "core-js",
    "regenerator-runtime": "regenerator-runtime",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname),
    },
    extensions: ["*", ".js", ".jsx"],
  },
};

// var cjsConfig = Object.assign({}, config, {
//     entry: "./pixelbin.js",
//     output: {
//       path: path.resolve("dist/cjs/"),
//       filename: "pixelbin.js",
//       libraryTarget: "commonjs2",
//     }
// })

var umdConfig = Object.assign({}, config, {
    entry: {
      pixelbin: path.resolve(__dirname, "pixelbin.js")
    },
    output: {
      path: path.resolve("dist"),
      filename: "pixelbin.js",
      libraryExport: "default",
      libraryTarget: "umd",
      globalObject: `(typeof self !== 'undefined' ? self : this)`,
    }
})

module.exports = [
  // cjsConfig, 
  umdConfig
];