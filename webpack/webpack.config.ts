import webpack from 'webpack';
import * as path from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const tsconfigPath = path.join(__dirname, '..', 'tsconfig.build.json');

const config: webpack.Configuration = {
  devtool: 'inline-source-map',
  mode: 'production',
  entry: ['./index.ts'],
  context: path.join(__dirname, '../src'),
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: tsconfigPath,
            },
          },
        ],
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  externals: [/react.*/],
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: tsconfigPath,
        memoryLimit: 2048,
      },
    }),
  ],
  target: 'web',
};

export default config;
