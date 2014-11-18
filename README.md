# grunt-nightwatchjs

[![npm version](https://badge.fury.io/js/grunt-nightwatchjs.svg)](http://badge.fury.io/js/grunt-nightwatchjs) [![Build Status](https://travis-ci.org/david-martin/grunt-nightwatchjs.svg)](https://travis-ci.org/david-martin/grunt-nightwatchjs)

Grunt plugin for http://nightwatchjs.org/

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-nightwatchjs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-nightwatchjs');
```

## The "nightwatchjs" task

### Overview

Add a nightwatch.json file to the root of your project, then run a nightwatch environment as follows:

```
grunt nightwatchjs:my_env
```

Currently the plugin depends on the nightwatch cli being available from `./node_modules/.bin/nightwatch`, so your project will have to include `nightwatch` as a dependency in your `package.json`. This may change in time.

Nightwatchjs may have its own dependencies that need installing too (e.g. selenium jar). Best to check https://github.com/beatfactor/nightwatch.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

