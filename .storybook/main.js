const path = require('path')

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    framework: '@storybook/react-webpack5',
    addons: [{
        name: '@storybook/preset-create-react-app',
        options: {
            tsDocgenLoaderOptions: {
                tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
            },
        },
    }, {
        name: '@storybook/addon-docs',
        options: {
            configureJSX: true,
        },
    }, '@storybook/addon-webpack5-compiler-babel'],
}