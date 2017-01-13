module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
// download the grunt register task plugin to avoid multiple loadNpmTasks

    grunt.initConfig({
        sass: {
            dist: {
                src: 'sass/style.scss',
                dest: 'dist/css/style.css'
            }
        },
        concat: {
            dist: {
                src: ['js/script1.js', 'js/script2.js'],
                dest: 'dist/js/combined.js'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/js/combined.min.js': ['js/script1.js', 'js/script2.js']
                }
            }
        }
    });

    grunt.registerTask('default', [
        'sass',
        'concat',
        'uglify'
    ])
}