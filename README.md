# polymer-css-compiler
Polymer css compiler - grunt task for compiling CSS files into polymer style modules

## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install polymer-css-compiler --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('polymer-css-compiler');
```

## Usage Examples

```js
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'polymer-css-compiler': {
            default: {
                files: [{
                    expand: true,
                    cwd: 'public/polymer-components',
                    dest: 'public/polymer-components',
                    src: '**/*.css',
                    ext: '.html'
                }]
            }
        }
    });

    grunt.loadNpmTasks('polymer-css-compiler');
};
```

In the example above, all CSS files under the path 'public/polymer-components' will be compiled a polymer style module. The generated polymer style module will inherit the name of its source CSS file.
