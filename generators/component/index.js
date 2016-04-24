'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
    prompting: function() {
        var done = this.async();

        this.log(yosay(
            'Vanakkam!  Redux Modules - Component Generator'
        ));

        var prompts = [{
            type: 'string',
            name: 'name',
            message: 'Component Name'
        }, {
          type: 'list',
          name: 'type',
          message: 'Component type?',
          choices: [{ name: 'Component', value: 'components' }, { name: 'Container', value: 'containers' }],
          'default': 'components'
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

      this.fs.copyTpl(
          this.templatePath('_component.js'),
          this.destinationPath(jsPath),
          this
      );

      this.fs.copyTpl(
          this.templatePath('_style.scss'),
          this.destinationPath(cssPath),
          this
      );
    }
});
