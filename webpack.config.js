const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const rootPath = (url) => path.join(__dirname, './', url);

module.exports = [
  {
    watch: true,
    mode: 'development',
    target: 'node',
    externals: [nodeExternals()],
    entry: {
      Server: rootPath('src/Server.js'),
    },
    output: {
      path: rootPath('tmp'),
      filename: '[name].js',
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                presets: [
                  [
                    '@babel/preset-env',
                    {targets: {node: 'current'}, useBuiltIns: 'entry'},
                  ],
                  '@babel/preset-react',
                ],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new NodemonPlugin({
        verbose: true,
        script: rootPath('tmp/Server.js'),
        watch: rootPath('tmp/Server.js'),
        // Uncomment to debug
        // nodeArgs: ['inspect'],
      }),
    ],
  },
  {
    watch: true,
    mode: 'development',
    entry: {
      Browser: './src/App/index.js',
    },
    output: {
      path: rootPath('tmp'),
      filename: '[name].js',
      publicPath: '/assets/',
      libraryTarget: 'umd',
      globalObject: 'this',
    },
    module: {
      rules: [
        {
          test: /\.s?[ac]ss$/,
          use: ['iso-morphic-style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      targets: {browsers: 'last 2 versions'},
                      useBuiltIns: 'entry',
                      // Uncomment to debug polyfills
                      // debug: true,
                    },
                  ],
                  '@babel/preset-react'
                ],
                plugins: [
                  'transform-class-properties',
                ],
              },
            },
          ],
        },
      ],
    },
  },
];
