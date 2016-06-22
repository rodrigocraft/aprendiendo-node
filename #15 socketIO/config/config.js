var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: '15-socketio'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/ingresosDB'
  },

  test: {
    root: rootPath,
    app: {
      name: '15-socketio'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/15-socketio-test'
  },

  production: {
    root: rootPath,
    app: {
      name: '15-socketio'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/15-socketio-production'
  }
};

module.exports = config[env];
