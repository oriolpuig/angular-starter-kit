'use strict';

module.exports = function (grunt) {
    var appCodeName = 'app';
    var styles = 'less';
    var portServe = 3000;

    grunt.initConfig({
        connect: {
            options: {
                open: true,
                port: portServe,
                livereload: 10000 + portServe
            },
            livereload: {
                options: {
                    base: [appCodeName]
                }
            }
        },
        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    appCodeName + '/index.html'
                ]
            }
        }
    });

    grunt.registerTask('serve', [
        'connect:livereload',
        'watch'
    ]);

    // load dinamically as needed grunt plugins
    require('jit-grunt')(grunt, {});
};