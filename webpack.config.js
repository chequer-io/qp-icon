// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './components/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname),
      '@common': path.resolve(__dirname, 'common'),
      '@scripts': path.resolve(__dirname, 'scripts'),
      '@stories': path.resolve(__dirname, 'stories'),
      '@components': path.resolve(__dirname, 'components'),
      '@icons': path.resolve(__dirname, 'icons'),
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
