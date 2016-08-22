module.exports = function(config) {
  config.set({
    frameworks: [ 'mocha', 'browserify' ],
    preprocessors: {
      'test/**/*.js': [ 'babel', 'browserify' ]
    },
    files: [
      './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
      'test/**/*.js'
    ],
    client: {
      mocha: {
        reporter: 'html', // change Karma's debug.html to the mocha web reporter
        ui: 'bdd'
      }
    },
    browserify: {
      debug: true,
      transform: [
        ['babelify', { presets: ['react'] }]
      ],
      configure: function(bundle) {
        bundle.on('prebundle', function() {
          bundle.external('react/addons');
          bundle.external('react/lib/ReactContext');
          bundle.external('react/lib/ExecutionEnvironment');
        });
      }
    },
    reporters: [ 'mocha' ],
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [ 'Chrome', 'PhantomJS', 'Firefox' ],
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 2,
    browserNoActivityTimeout: 20000,
    singleRun: true
  });
};
