module.exports = {
    repository: "@hetic/G02-E05-Light",
    personalAccessToken: "8d6b6515fa3313d68d20f4263f7985d0ce83ffe17b07b114e48b3bd6eb535dff",
    rules: [{
        name: "Colors / Light Theme",
        path: "./src/assets/style/colors/light.scss",
        filter: {
            types: ["color"]
        },
        parsers: [{
                name: "kebabcasify",
                options: {
                    keys: ["name"]
                }
            },
            {
                name: "to-css-custom-properties",
                options: {
                    formatConfig: {
                        selector: ".App[data-theme='light']",
                    },
                },
            },
        ],
    }]
}