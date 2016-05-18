'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    prompting: function() {
        var done = this.async();

        var args = this.argument().arguments;
        var defaultPath = args[0] || '.';

        
        this.log(yosay(
            'Vanakkam!  Redux Modules - App Generator'
        ));

        var prompts = [{
            type: 'string',
            name: 'name',
            message: 'Name your app',
            default: 'Crazy app'
        }, {
          type: 'string',
          name: 'path',
          'message': 'Path of your app',
          default: defaultPath
        }, {
          type: 'string',
          name: 'description',
          message: 'Describe your app',
          'default': '...'
        }, {
          type: 'string',
          name: 'port',
          message: 'Which port would you like to run on?',
          'default': '3000'
        }, {
          type: 'list',
          name: 'install',
          message: 'Install dependencies?',
          choices: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
          'default': true
        }];

        this.prompt(prompts, function(props) {
            this.props = props;
            done();
        }.bind(this));
    },

    writing: function() {
      this.destinationRoot(this.props.path);

      this.directory(
          this.templatePath('scaffold'),
          this.destinationPath('.')
          );
          
      this.fs.copyTpl(
          this.templatePath('_index.html'),
          this.destinationPath('index.html'),
          this
      );
      
      this.fs.copyTpl(
          this.templatePath('_package.json'),
          this.destinationPath('package.json'),
          this
      );

      this.fs.copyTpl(
          this.templatePath('_server.js'),
          this.destinationPath('server.js'),
          this
      );
    },

    install: function() {
        if(this.props.install === true) {
          this.installDependencies();
        }
    }
});
