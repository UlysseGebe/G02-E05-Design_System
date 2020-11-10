module.exports = {
    repository: "@hetic/G02-E05-Dark",
    personalAccessToken: "8d6b6515fa3313d68d20f4263f7985d0ce83ffe17b07b114e48b3bd6eb535dff",
    rules: [{
        name: "Colors / Dark Theme",
        path: "./src/assets/style/colors/dark.scss",
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
                        selector: ":root[data-theme='dark']",
                    },
                },
            },
        ],
    }]
}