'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('redmod:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'test app',
        description: 'test description',
        port: 8080,
        install: false
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'index.html',
      'server.js',
      'webpack.config.js',
      'webpack.prod.js',
      'src/app.js',
      'src/modules/index.js'
    ]);
  });


  it('check app name', function () {
    assert.fileContent('package.json', /test app/);
    assert.fileContent('package.json', /test description/);
    assert.fileContent('server.js', /listen\(8080/);
  });

});
