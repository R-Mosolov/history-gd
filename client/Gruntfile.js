module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: ['**/*.ts', '**/*.tsx'],
            tasks: ['exec:run_tsc']
        },
        exec: {
            run_tsc: {cmd: 'tsc'}
        },
        eslint: {
            target: ['file.js']
        }
    });
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('default', ['eslint']);
};
