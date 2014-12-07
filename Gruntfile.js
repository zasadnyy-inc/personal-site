module.exports = function(grunt) {

    var mozjpeg = require('imagemin-mozjpeg');

    grunt.initConfig({
        imagemin: { // Task
            dynamic: { // Another target
                options: {                       // Target options
                  optimizationLevel: 3,
                  svgoPlugins: [{ removeViewBox: false }],
                  use: [mozjpeg()]
                },
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'img/', // Src matches are relative to this path
                    src: ['vitaliy/posts/*.{png,jpg,gif}'], // Actual patterns to match
                    dest: 'img/' // Destination path prefix
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['imagemin']);
};
