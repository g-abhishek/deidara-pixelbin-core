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
    extensions: ["*", ".js", ".jsx"],
  },
};

var cjsConfig = Object.assign({}, config, {
    entry: "./pixelbin.js",
    output: {
      path: path.resolve("dist/cjs/"),
      filename: "pixelbin.js",
      libraryTarget: "commonjs2",
    }
})

var umdConfig = Object.assign({}, config, {
    entry: "./pixelbin.js",
    output: {
      path: path.resolve("dist/umd/"),
      filename: "pixelbin.js",
      libraryTarget: "umd",
    }
})

module.exports = [
  cjsConfig, 
  umdConfig
];