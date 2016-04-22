/*
 * Copyright (c) 2016 Roy Velich, contributors
 * Licensed under the MIT license.
 */

'use strict';

var Mustache = require('mustache');
var path = require('path');

module.exports = function(grunt) {
    grunt.registerMultiTask('psmc', 'Compile CSS files into polymer style modules', function() {
        // Indentation string which will be prepended to each css line
        var indentString = '            ';
        
        // Read the polymer's style module template
        var template = grunt.file.read(path.join(__dirname, 'template.html'));
        
        // Iterate over each file object
        this.files.forEach(function(file) {
            var css = file.src.filter(function(filepath) {
                // Remove nonexistent files
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function(filepath) {
                // Break the source file into lines
                var fileLines = grunt.file.read(filepath).match(/[^\r\n]+/g);
                
                // Iterate over each line and indent it
                var indentedFile = [];
                fileLines.forEach(function(line) {
                    indentedFile.push(indentString + line);
                });

                // Return the indented source file
                return indentedFile.join('\r\n');
            });

            // Get the dest file base name - we will use it as the id of the compiled style module
            var id = path.basename(file.dest, '.html');

            // Write joined contents to destination filepath.
            grunt.file.write(file.dest, Mustache.render(template, {
                id: id,
                css: css
            }));

            // Print a success message.
            grunt.log.ok('File "' + file.dest + '" created.');
        });
    });
};