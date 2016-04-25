'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('redmod:module', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/module'))
      .withPrompts({
        name: 'Test',
        generateIndex: true
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'src/modules/Test.js',
      'tst/modules/Test.js',
    ]);
  });

  it('check module name', function () {
    assert.fileContent('src/modules/Test.js', /namespace = \'Test\'/);
  });

  it('should generate index', function () {
    assert.fileContent('src/modules/index.js', /export { default as Test } from '\.\/Test\.js\'/);
  })

});



describe('redmod:module without generate', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/module'))
      .withPrompts({
        name: 'Test',
        generateIndex: false
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'src/modules/Test.js',
      'tst/modules/Test.js',
    ]);
  });

  it('check module name', function () {
    assert.fileContent('src/modules/Test.js', /namespace = \'Test\'/);
  });

  it('should generate index', function () {
    assert.noFile('src/modules/index.js');
  })

});
