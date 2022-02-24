import * as path from 'path';
import * as webpack from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'development',
  entry: './components/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['solid'],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(__dirname, 'tsconfig.json'),
      }),
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

export default config;
