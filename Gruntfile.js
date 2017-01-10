'use strict';

module.exports = function (grunt) {
    var appCodeName = 'app';
    var styles = 'sass';
    var portServe = 3000;

    grunt.initConfig({
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 10', 'ie 11', 'ios 7', 'ios 8'],
            },
            build: {
                files: [{
                    expand: true,
                    cwd: '.tmp/',
                    src: '**/*.css',
                    dest: '.tmp/'
                }],
            },
        },
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
                hostname: '127.0.0.1',
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
        ngconstant: {
            options: {
                name: 'angular.starter.kit.constants',
                dest: appCodeName + '/constants.js',
                template: grunt.file.read('config/ngConstant.template.ejs')
            },
            dev: {
                constants: 'config/dev.json'
            },
            prod: {
                constants: 'config/prod.json'
            }
        },
        sass: {
            build: {
                files: { '.tmp/bundle.css': appCodeName + '/app.scss' },
            },
        },
        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },
            sass: {
                files: [appCodeName + '/**/*.scss'],
                tasks: ['sass', 'autoprefixer']
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
        'ngconstant:dev',
        'browserify:dev',
        styles,
        'autoprefixer',
        'connect:livereload',
        'watch'
    ]);

    // load dinamically as needed grunt plugins
    require('jit-grunt')(grunt, {
        ngconstant: 'grunt-ng-constant'
    });
};