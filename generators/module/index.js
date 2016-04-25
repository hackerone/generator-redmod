'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var fs = require('fs');

module.exports = yeoman.generators.Base.extend({
    prompting: function() {
        var done = this.async();

        this.log(yosay(
            'Vanakkam! Redux Modules - Module (Store + Action + Constants) Generator'
        ));

        var prompts = [{
            type: 'string',
            name: 'name',
            message: 'Module name - CamelCasePlease'
        }, {
            type: 'list',
            name: 'generateIndex',
            message: 'Generate module index?'
        }];

        this.prompt(prompts, function(props) {
            this.props = props;
            done();
        }.bind(this));
    },

    writing: function() {
      var name = this.props.name,
        generateIndex = this.props.generateIndex,
        modulePath = path.join('src', 'modules', name + '.js' ),
        testPath = path.join('tst', 'modules', name + '.js' );

      if(!name) {
        throw new Error("Module name required in CamelCase");
      }

      this.fs.copyTpl(
          this.templatePath('_module.js'),
          this.destinationPath(modulePath),
          this
      );

      this.fs.copyTpl(
          this.templatePath('_test.js'),
          this.destinationPath(testPath),
          this
      );
    },

    install: function () {
      if( this.props.generateIndex === true ) {
        var modulePath = this.destinationPath(path.join('src', 'modules')),
            moduleIndex = this.destinationPath(path.join('src', 'modules', 'index.js'));
        
        var self = this;

        fs.readdir(modulePath, function(err,files) {
        
          if(! err ) {
            var modules = files.filter(function(file) {
              return file != 'index.js';
            }).map(function (file) {
              return {
                name: file.replace('.js', ''),
                file: file
              };
            });

            self.fs.copyTpl(
              self.templatePath('_index.js'),
              self.destinationPath(moduleIndex),
              { modules : modules }
            );
          }
        });
      }
    }
});
