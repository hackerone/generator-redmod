'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('redmod:component', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/component'))
      .withPrompts({
        name: 'Test',
        type: 'components'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'src/components/test/Test.js',
      'src/components/test/Test.scss',
    ]);
  });

  it('check component name', function () {
    assert.fileContent('src/components/test/Test.js', /const Test/);
    assert.fileContent('src/components/test/Test.js', /Test\.scss/);
  });

});


describe('redmod:container', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/component'))
      .withPrompts({
        name: 'Test',
        type: 'containers'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'src/containers/test/Test.js',
      'src/containers/test/Test.scss',
    ]);
  });

  it('check component name', function () {
    assert.fileContent('src/containers/test/Test.js', /const Test/);
    assert.fileContent('src/containers/test/Test.js', /Test\.scss/);
  });

});