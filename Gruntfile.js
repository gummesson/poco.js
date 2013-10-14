module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var project = {
    js: {
      files: [
        'Gruntfile.js',
        'lib/**/*'
      ],
      src: ['lib/poco.js'],
      dest: 'dist/poco.min.js'
    }
  };

  grunt.initConfig({
    jshint: {
      files: project.js.files
    },

    uglify: {
      options: {
        report: 'gzip'
      },

      dist: {
        src: project.js.src,
        dest: project.js.dest
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'uglify']);

};
