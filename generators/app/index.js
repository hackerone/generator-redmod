'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    prompting: function() {
        var done = this.async();

        this.log(yosay(
            'Vanakkam!  Redux Modules Generator'
        ));

        var prompts = [{
            type: 'confirm',
            name: 'name',
            message: 'App name?',
            default: true
        }];

        this.prompt(prompts, function(props) {
            this.props = props;
            done();
        }.bind(this));
    },

    writing: function() {
        this.fs.directory(
            this.templatePath('scaffold'),
            this.destinationPath('.'),
            );
            
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('index.html'),
            this
        );
        
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('index.html'),
            this
        );
    },

    install: function() {
        this.installDependencies();
    }
});
