const TsconfigPathsPlugin  = require('tsconfig-paths-webpack-plugin');

module.exports = {
  core: { builder: 'webpack5' },
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: '@storybook/react',

  typescript: {
    reactDocgen: false,
  },

  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin({})];
    config.plugins = [...((config.plugins ?? [])).filter(
      plugin => plugin.name !== 'React Docgen Typescript Plugin',
    )];

    return config;
  },
};
