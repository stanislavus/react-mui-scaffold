module.exports = {
    stories: ['../src/**/*.stories.js'],
    addons: [
        '@storybook/addon-knobs/register',
        '@storybook/addon-actions/register',
        '@storybook/addon-storysource',
        '@storybook/addon-docs',
        '@storybook/addon-viewport/register',
        '@storybook/addon-backgrounds/register',
        '@storybook/addon-a11y/register',
        'storybook-addon-jsx',
    ],
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
};