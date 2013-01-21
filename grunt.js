var toWatch, i,
    fs = require('fs'),
    site = {settings: {}};

// Read in the settings file
eval(fs.readFileSync('./settings.js', 'utf8'));
toWatch = site.settings.inputFolders || [];

// Make sure to look for each file within the folder
for(i = 0; i < toWatch.length; i++) {
    toWatch[i] = toWatch[i] + '*';
}

// Add default folders to the mix
toWatch = toWatch.concat([
    'posts/*',
    'partials/*',
    'assets/*',
    'layouts/*',
    'pages/*',
    'posts/*',
    '*.js'
]);

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        // Add any third party folders to this list
        watch: {
            files: toWatch,
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
