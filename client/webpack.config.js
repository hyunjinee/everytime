const path = require('path');
const childProcess = require('child_process');
const { ProgressPlugin, BannerPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const tsConfigPath = path.resolve(__dirname, './tsconfig.json');

const banner = () => {
  const commit = childProcess.execSync('git rev-parse --short HEAD');
  const user = childProcess.execSync('git config user.name');
  const date = new Date().toLocaleString();

  return (
    `commitVersion: ${commit}` + `Build Date: ${date}\n` + `Author: ${user}`
  );
};

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: '3000',
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader',
          options: {
            publicPath: './src/assets',
            name: '[name].[ext]?[hash]',
            limit: 5000,
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ProgressPlugin(),
    new BannerPlugin(banner),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: { '@': path.resolve(__dirname, 'src') },
    plugins: [new TsconfigPathsPlugin({ configFile: tsConfigPath })],
  },
};
