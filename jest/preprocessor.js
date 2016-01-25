// jest/preprocessor.js
import babelJest from 'babel-jest';
import webpackAlias from 'jest-webpack-alias';

module.exports = {
  process: function(src, filename) {
    if (filename.indexOf('node_modules') === -1) {
      src = babelJest.process(src, filename);
      src = webpackAlias.process(src, filename);
    }
    return src;
  }
};