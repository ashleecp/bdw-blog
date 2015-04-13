var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'bdw-blog'
    },
    port: 3000,
    db: 'mongodb://heroku_app35487755:ee642e0c26su8uf9re20kft45q@ds053808.mongolab.com:53808/heroku_app35487755'
  },

  test: {
    root: rootPath,
    app: {
      name: 'bdw-blog'
    },
    port: 3000,
    db: 'mongodb://localhost/bdw-blog-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'bdw-blog'
    },
    port: 3000,
    db: 'mongodb://localhost/bdw-blog-production'
  }
};

module.exports = config[env];
