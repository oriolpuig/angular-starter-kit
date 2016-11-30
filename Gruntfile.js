'use strict';

module.exports = function (grunt) {
    var appCodeName = 'app';
    var styles = 'less';
    var portServe = 3000;

    grunt.initConfig({
        browserify: {
            dev: {
                files: {
                    '.tmp/bundle.js': [appCodeName + '/index.js']
                },
                options: {
                    watch: true,
                    browserifyOptions: { debug: true },
                    transform: [
                        'hintify',
                        ['stringify', { 'extensions': ['.html'] }],
                        'browserify-ngannotate',
                        'envify'
                    ]
                }
            }
        },
        clean: {
            tmp: {
                files: [
                    { dot: true, src: ['.tmp'] }
                ]
            }
        },
        connect: {
            options: {
                open: true,
                port: portServe,
                livereload: 10000 + portServe
            },
            livereload: {
                options: {
                    base: ['.tmp', appCodeName, '.']
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
                    appCodeName + '/index.html',
                    appCodeName + '/**/*.{png,gif,jpg,svg}',
                    '.tmp/bundle.*', '.tmp/bundle.css'
                ]
            }
        }
    });

    grunt.registerTask('serve', [
        'clean',
        'browserify:dev',
        'connect:livereload',
        'watch'
    ]);

    // load dinamically as needed grunt plugins
    require('jit-grunt')(grunt, {});
};