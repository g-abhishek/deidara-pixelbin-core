module.exports = {
    APPLICATION_JSON: "application/json",

    filesPaths: {
        JAVASCRIPT: {
            OUTPUT: ["/transformations/", "transformation.js", "image.js", "pixelbin.js", "package.json", "README.md", "/utils/index.js", "webpack.config.js"],
            TEMPLATES: [
                "transformations.nunjucks",
                "transformation.nunjucks",
                "image.nunjucks",
                "pixelbin.nunjucks",
                "package.nunjucks",
                "readme.nunjucks",
                "url.nunjucks",
                "webpack.config.nunjucks",
            ]
        },
    },
};