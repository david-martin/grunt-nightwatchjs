/*
 * grunt-nightwatchjs
 * https://github.com/dmartin/grunt-nightwatchjs
 *
 * Copyright (c) 2014 David Martin
 * Licensed under the MIT license.
 */

'use strict';

var util = require('util');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask('nightwatchjs', 'Grunt plugin for http://nightwatchjs.org/', function(task) {
    var done = this.async();

    var args = ['--env=' + task];

    var filter = grunt.option('filter');
    if (filter != null) {
      args = args.concat(['-f', filter]);
    }

    grunt.log.writeln('Running nightwatchjs with args:' + util.inspect(args, { depth: null }));
    require('child_process').spawn('./node_modules/.bin/nightwatch', args, {
      env: process.env,
      stdio: 'inherit'
    }).on('close', function(code) {
      if (code !== 0) {
        return done(false);
      }
      return done();
    });
  });

};
