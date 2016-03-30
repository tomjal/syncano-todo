/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'syncano-todo',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    exportApplicationGlobal: true,
    contentSecurityPolicy: {
      'connect-src': "'self' https://api.syncano.io",
      'font-src': "'self' https://maxcdn.bootstrapcdn.com",
      'style-src': "'self' https://maxcdn.bootstrapcdn.com"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    syncano: {
      accountKey: '',
      apiKey: '7cc94b9ca9087e544697560c68dd75f5620f5f03',
      instance: 'billowing-snowflake-7678'
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      // SYNCANO_API_KEY:'7cc94b9ca9087e544697560c68dd75f5620f5f03',
      // SYNCANO_INSTANCE_NAME:'billowing-snowflake-7678'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/syncano-todo';
  }

  return ENV;
};
