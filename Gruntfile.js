module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    // 'js/libs/*.js', // All JS in the libs folder
                    // 'js/global.js'  // This specific file
                    'js/*.js'
                ],
                dest: 'js/build/production.js',
            }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        pagespeed: {
            options: {
                nokey: true,
                url: "https://developers.google.com"
            },
            prod: {
                options: {
                    url: "https://developers.google.com/speed/docs/insights/v1/getting_started",
                    locale: "en_GB",
                    strategy: "desktop",
                    threshold: 80
                }
            },
            paths: {
                options: {
                    paths: ["/speed/docs/insights/v1/getting_started", "/speed/docs/about"],
                    locale: "en_GB",
                    strategy: "desktop",
                    threshold: 80
                }
            }
        },

        responsive_images: {
            dev: {
                options: {
                    sizes: [{
                        name: 'small',
                        width: 400
                    }, {
                        name: 'medium',
                        width: 600
                    }, {
                        name: "large",
                        width: 800
                    }]
                },
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['*.{jpg,gif,png}'],
                    dest: 'img/build/'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            }
        },

        concat_css: {
            options: {
                // Task-specific options go here. 
            },
            all: {
                src: ["css/*.css"],
                dest: "css/build/style.css"
            },
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/build',
                    src: ['style.css', '!*.min.css'],
                    dest: 'css/build/',
                    ext: '.min.css'
                }]
            }
        }

    });

    // 3. Where we tell Grunt we plan to use plug-ins. 
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-pagespeed');

    // Seems to be broken on OSX Sierra ~_~ 
    // grunt.loadNpmTasks('grunt-responsive-images');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat',
        'uglify',
        'concat_css',
        'cssmin',
        // 'responsive_images', 
        // 'watch'
    ]);
};