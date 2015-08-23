/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            /* Change these */
            name: 'small',
            width: 300,
            /* suffix: '_large_2x', */
            quality: 20
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}','!selfie.jpg'],
          cwd: 'img_src/',
          dest: 'img/'
        }]
      }
    },

    /* Clear out the img directory if it exists */
    clean: {
      dev: {
        src: ['img'],
      },
    },

    /* Generate the img directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['img']
        },
      },
    },

    /* Copy the files to img directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: '*.{gif,jpg,png,svg}',
          cwd: 'img_src/',
          dest: 'img/'
        }]
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
