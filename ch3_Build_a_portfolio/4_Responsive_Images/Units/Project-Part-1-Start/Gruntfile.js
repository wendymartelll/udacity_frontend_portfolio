/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    express: {
        all: {
            options: {
                bases: ['/Users/wendymartell/Dropbox/SELF-LEARNING/UDACITY_Front_End/Quizess/4_Responsive_Images/Units/Project-Part-1-Start/'],
                port: 8080,
                hostname: "0.0.0.0",
                livereload: true
            }
        }
    },

    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            /*
            Change these:

            width: ,
            suffix: ,
            quality:
            */
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },

    watch: {
        all: {
                files: '**/*.html',
                options: {
                    livereload: true
            }
        }
    },

    open: {
        all: {
            path: 'http://localhost:8080/index.html'
        }
    }
  });


  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);
  grunt.registerTask('server', ['express','open','watch']);

};
