module.exports = {
    presets: ["@babel/preset-react", ['@babel/preset-env', { targets: { node: "current" } }]],
    plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-runtime"]
};