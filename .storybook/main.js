module.exports = {
    stories: ['../src/**/*.stories.([tj]s|[tj]sx|mdx)'],
    addons: [
        '@storybook/addon-knobs/register',
        '@storybook/addon-actions/register',
        '@storybook/addon-storysource',
        '@storybook/addon-docs',
        '@storybook/addon-viewport/register',
        '@storybook/addon-backgrounds/register',
        '@storybook/addon-a11y/register'
    ]
};