/*
 * grunt-nightwatchjs
 * https://github.com/dmartin/grunt-nightwatchjs
 *
 * Copyright (c) 2014 David Martin
 * Licensed under the MIT license.
 */

'use strict';

var util = require('util');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask('nightwatchjs', 'Grunt plugin for http://nightwatchjs.org/', function (task) {
    var done = this.async();
    var args = [];

    if (grunt.option('debug')) {
      grunt.log.writeln('Running nightwatch in debug mode.');
      args = ['--debug-brk'];
    }  

    args = args.concat(['./node_modules/nightwatch/bin/nightwatch', '--env=' + task]);

    var filter = grunt.option('filter');
    if (filter != null) {
      args = args.concat(['-f', filter]);
    }

    var specificTest = grunt.option('test');

    if (specificTest) {
      args = args.concat(['-t', specificTest]);
    }

    var groups = grunt.option('group');
    if (groups) {
      args = args.concat(['--group', groups]);
    }

    var skipGroups = grunt.option('skipgroup');
    if (skipGroups) {
      args = args.concat(['--skipgroup', skipGroups]);
    }

    var tag = grunt.option('tag');
    if (tag) {
      args = args.concat(['--tag', tag]);
    }

    var skipTag = grunt.option('skiptags');
    if (skipTag) {
      args = args.concat(['--skiptags', skipTag]);
    }

    var config = grunt.option('config');
    if (config) {
      args = args.concat(['--config', config]);
    }

    var failedTests = grunt.option('failedTests');
    if (failedTests) {
      args = args.concat(['--failedTests', failedTests]);
    }

    var retries = grunt.option('retries');
    if (retries) {
      args = args.concat(['--retries', retries]);
    }

    var suiteRetries = grunt.option('suiteRetries');
    if (suiteRetries) {
      args = args.concat(['--suiteRetries', suiteRetries]);
    }

    grunt.log.writeln('Running nightwatch with args:' + util.inspect(args, {depth: null}));
    require('child_process').spawn('node', args, {
      env: process.env,
      stdio: 'inherit'
    }).on('close', function (code) {
      if (code !== 0) {
        grunt.event.emit('nightwatch.failure', code);
      } else {
        grunt.event.emit('nightwatch.success', code);
      }
      if (code !== 0 && !grunt.option('skipExit')) {
        return done(false);
      }
      return done();
    });
  });

};
