module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

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

                'lessons/*.md',
                'lessons/*.html',

                '*.js'
            ],
            tasks: 'exec'
        },

        exec: {
            compile: {
                command: 'ssc b',
                stdout: true
            }
        },

        server: {
            port: 8080,
            base: 'public'
        }

    });

    // Default task.
    grunt.registerTask('default', 'server watch');

    // Import tasks
    grunt.loadNpmTasks('grunt-exec');
};
