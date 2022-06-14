const path = require("path");

module.exports = {
  entry: "./pixelbin.js",
  output: {
    path: path.resolve("dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
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
