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
          'dist/css/style.css': 'sass/styles.scss'
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
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/img/'
        }]
      }
    },

    htmlmin: {
      dist: {       
        options: {  
          removeComments: true,
          // collapseWhitespace: true
        },
        files: {    
          'dist/index.html': 'index.html',
          'dist/404.html': '404.html'
        },
        dev: {                               
          files: {
            'dist/index.html': 'index.html',
            'dist/404.html': '404.html'
          }
        }
      }
    },

    copy: {
      main: {
        files: [
      // includes files within path and its sub-directories
      {expand: true, src: ['js/**'], dest: 'dist/'},
      {expand: true, src: ['fonts/**'], dest: 'dist/'},
      ]
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
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['htmlmin', 'copy' ,'sass','concat','uglify','imagemin','watch']);

};