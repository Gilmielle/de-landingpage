// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line no-undef
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const prodCSSLoaders = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  'postcss-loader',
  'sass-loader',
];
const devCSSLoaders = ['style-loader', 'css-loader', 'sass-loader'];

// eslint-disable-next-line no-undef
module.exports = (env, argv) => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      publicPath: '/',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.(css|scss)$/i,
          use: argv.mode === 'production' ? prodCSSLoaders : devCSSLoaders,
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|woff|woff2)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin(),
    ],
    devServer: {
      historyApiFallback: true,
      hot: true,
    },
  };
};
