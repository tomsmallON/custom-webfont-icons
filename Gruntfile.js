module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    /*
     * https://github.com/gruntjs/grunt-contrib-sass
     */
    sass: {
      dist: {
        files: {
          "css/styles.css": "scss/styles.scss",
        },
      },
    },

    /*
     * https://github.com/sindresorhus/grunt-svgmin
     */
    svgmin: {
      options: {
        plugins: [{ removeViewBox: false }],
      },
      dist: {
        expand: true,
        cwd: "svg/src",
        src: "*.svg",
        dest: "svg/min",
        ext: ".svg",
        extDot: "first",
      },
    },

    /*
     * https://github.com/sapegin/grunt-webfont
     */
    webfont: {
      icons: {
        src: "svg/src/icons/*.svg",
        dest: "fonts",
        destCss: "scss",
        options: {
          fontFamilyName: "<%= pkg.name %> Icons",
          engine: "node",
          syntax: "bootstrap",
          fontFilename: "<%= pkg.name %>-icons",
          stylesheets: ["scss"],
          htmlDemo: false,
          optimize: false,
          normalize: true,
          ligatures: false,
          template: "svg/icons-template.css",
          templateOptions: {
            baseClass: "<%= pkg.name %>-icon",
            classPrefix: "<%= pkg.name %>-icon-",
          },
        },
      },
    },

    /*
     * https://github.com/gruntjs/grunt-contrib-watch
     */
    watch: {
      styles: {
        files: ["scss/**/*.scss"],
        tasks: ["sass"],
        options: {
          nospawn: true,
        },
      },
    },
  });
  
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-webfont");
  grunt.registerTask("default", ["sass", "watch"]);
  grunt.registerTask("icon", ["webfont"]);
  
};
