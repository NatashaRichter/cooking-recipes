module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        // Add any third party folders to this list
        watch: {
            files: [
                'assets/**/*.less',
                'assets/**/*.css',
                'assets/**/*.js',

                'layouts/*.md',
                'layouts/*.html',

                'pages/*.md',
                'pages/*.html',

                'partials/*.md',
                'partials/*.html',

                '*.js'
            ],
            tasks: 'exec:compile'
        },

        exec: {
            compile: {
                command: 'ssc build',
                stdout: true
            },
            compileP: {
                command: 'ssc build production',
                stdout: true
            },
            deploy: {
                command: 'ssc deploy',
                stdout: true
            }
        },

        server: {
            port: 8080,
            base: 'public'
        }

    });

    // Default task.
    grunt.registerTask('default', 'exec:compile server watch');
    grunt.registerTask('deploy', 'exec:compileP exec:deploy');

    // Import tasks
    grunt.loadNpmTasks('grunt-exec');
};