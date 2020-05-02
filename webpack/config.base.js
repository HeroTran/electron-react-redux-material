import { PATHS } from '../app/renderer/utils/paths';
import { dependencies as externals } from '../app/package.json';

('use strict');

/* eslint global-require: off */

/**
 * Base webpack config used across other specific configs
 */
const path = require('path');
const webpack = require('webpack');

// const pkg = require('../package.json');

export default {
  externals: [...Object.keys(externals || {})],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  output: {
    path: PATHS.app,
    libraryTarget: 'commonjs2',
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.jsx', '.js', '.scss', '.json', '.css'],
    modules: [path.join(__dirname, '..', 'app'), 'node_modules'],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
    new webpack.NamedModulesPlugin(),
  ],
};
