module.exports = function (grunt) {
'use strict';

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  grunt.initConfig({
    
    connect: {
      app: {
        options: {
          port: 8000,
          hostname: '0.0.0.0',
          keepalive: true,
          base: ['.']
        }
      }
    }

  });
  
  grunt.registerTask('default', function () {
    grunt.task.run('serve');
  });
  
  grunt.registerTask('serve', [
    'connect:app'
  ]);

};
