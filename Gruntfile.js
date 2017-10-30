module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          'statics/theme/mkh/css/style.css': 'statics/theme/mkh/sass/style.scss'
        }
      }
    },
    postcss: {
      options: {
        map: false,

        processors: [
          require('autoprefixer')({ browsers: 'last 2 versions' }), // add vendor prefixes
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'statics/theme/mkh/css/*.css'
      }
    },
    watch: {
      styles: {
        files: ['statics/theme/mkh/sass/*.scss'],
        tasks: ['sass', 'postcss']
      }
    }
  });

  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('build', ['sass', 'postcss']);
};
