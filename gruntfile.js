module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            desktop: {
                files: {
                    'css/site.css': '_scss/site.scss',
                }
            }
        },
        postcss: {
            post : {
                options: {
                    processors: [
                        require('autoprefixer')({browsers: '> 1%'})
                    ]
                },
                files: {
                    'css/site.css': 'css/site.css',
                }
            }
        },
        watch: {
            stylesheets: {
                files: '_scss/**/*.scss',
                tasks: ['sass', 'postcss']
            }
        }
    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'postcss', 'watch']);
};
