module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    sass: {                              
      dist: {                            
        options: {                       
          style: 'compressed',
          sourcemap: true
        },
        files: {                         
          'css/main.min.css': 'sass/styles.scss'
        }
      }
    },

    concat: {
        dist: {
          src: [
            'js/libs/*.js',
            'js/main.js'
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

    imagemin: {
        dynamic: {
          files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'img/'
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
        },
        css: {
          files: ['sass/*.scss'],
          tasks: ['sass'],
          options: {
            spawn: false,
          }
        }
      }


});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass','concat','uglify','imagemin','watch']);

};