module.exports = function (config) {
  var webpack = require('webpack');
  var path = require('path');

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      {pattern: 'src/**/*-desktop-spec.js', included: true}
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*-spec.js': ['webpack']
    },

    webpack: {
      devtool: 'eval',
      cache: true,
      failOnError: false,
      module: {
        loaders: [
          {test: /\.js$/, exclude: /node_modules|bower_components/, loader: 'babel-loader'}
        ]
      },
      plugins: [
        new webpack.PrefetchPlugin('react')
      ]
    },

    webpackServer: {
      noInfo: true, //please don't spam the console when running in karma!
    },

    browserNoActivityTimeout: 200000,
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    junitReporter : {
      outputFile: 'target/reports/unit-test-results.xml'
    },

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['desktop'],

    customLaunchers: {
      desktop: {
        base: "Chrome",
        flags: ["--window-size=700,600"]
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
