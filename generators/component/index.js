'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
    prompting: function() {
        var done = this.async();

        this.log(yosay(
            'Vanakkam! Redux Modules - Component Generator'
        ));

        var prompts = [{
            type: 'string',
            name: 'name',
            message: 'Component name - CamelCasePlease'
        }, {
          type: 'list',
          name: 'type',
          message: 'Component type?',
          choices: [{ name: 'UI Component', value: 'components' }, { name: 'Container', value: 'containers' }],
          'default': 'components'
        }, {
          type: 'string',
          name: 'reducer',
          message: 'Reducer name?'
        }];

        this.prompt(prompts, function(props) {
            this.props = props;
            done();
        }.bind(this));
    },

    writing: function() {
      var name = this.props.name,
        type = this.props.type,
        componentDir = name.toLowerCase(),
        jsPath = path.join('src', type, componentDir, name + '.js' ),
        cssPath = path.join('src', type, componentDir, name + '.scss' );

      if(!name) {
        throw new Error("Component name required in CamelCase");
      }

      if(this.props.reducer) {
        this.fs.copyTpl(
            this.templatePath('_componentWithReducer.js'),
            this.destinationPath(jsPath),
            this
        );
      } else {
        this.fs.copyTpl(
            this.templatePath('_component.js'),
            this.destinationPath(jsPath),
            this
        );
      }


      this.fs.copyTpl(
          this.templatePath('_style.scss'),
          this.destinationPath(cssPath),
          this
      );
    }
});
