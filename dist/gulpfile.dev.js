"use strict";

var gulp = require("gulp");

var webpack = require("webpack-stream");

var sass = require("gulp-sass");

var autoprefixer = require("autoprefixer");

var cleanCSS = require("gulp-clean-css");

var postcss = require("gulp-postcss");

var browsersync = require("browser-sync");

var dist = "./dist";
gulp.task("copy-html", function () {
  return gulp.src("./src/index.html").pipe(gulp.dest(dist)).pipe(browsersync.stream());
});
gulp.task("build-js", function () {
  return gulp.src("./src/js/main.js").pipe(webpack({
    mode: 'development',
    output: {
      filename: 'script.js'
    },
    watch: false,
    devtool: "source-map",
    module: {
      rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              debug: true,
              corejs: 3
            }]]
          }
        }
      }]
    }
  })).pipe(gulp.dest(dist + '/js')).pipe(browsersync.stream());
});
gulp.task("build-sass", function () {
  return gulp.src("./src/scss/**/*.scss").pipe(sass().on('error', sass.logError)).pipe(gulp.dest(dist + '/css')).pipe(browsersync.stream());
});
gulp.task("copy-assets", function () {
  gulp.src("./src/icons/**/*.*").pipe(gulp.dest(dist + "/icons"));
  return gulp.src("./src/img/**/*.*").pipe(gulp.dest(dist + "/img")).pipe(browsersync.stream());
});
gulp.task("watch", function () {
  browsersync.init({
    server: "./dist/",
    port: 4000,
    notify: true
  });
  gulp.watch("./src/index.html", gulp.parallel("copy-html"));
  gulp.watch("./src/icons/**/*.*", gulp.parallel("copy-assets"));
  gulp.watch("./src/img/**/*.*", gulp.parallel("copy-assets"));
  gulp.watch("./src/scss/**/*.scss", gulp.parallel("build-sass"));
  gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
});
gulp.task("build", gulp.parallel("copy-html", "copy-assets", "build-sass", "build-js"));
gulp.task("prod", function () {
  gulp.src("./src/index.html").pipe(gulp.dest(dist));
  gulp.src("./src/img/**/*.*").pipe(gulp.dest(dist + "/img"));
  gulp.src("./src/icons/**/*.*").pipe(gulp.dest(dist + "/icons"));
  gulp.src("./src/js/main.js").pipe(webpack({
    mode: 'production',
    output: {
      filename: 'script.js'
    },
    module: {
      rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              debug: false,
              corejs: 3
            }]]
          }
        }
      }]
    }
  })).pipe(gulp.dest(dist + '/js'));
  return gulp.src("./src/scss/style.scss").pipe(sass().on('error', sass.logError)).pipe(postcss([autoprefixer()])).pipe(cleanCSS()).pipe(gulp.dest(dist + '/css'));
});
gulp.task("default", gulp.parallel("watch", "build"));