var filter = require('gulp-filter')
var flatten = require('gulp-flatten')
var gulp = require('gulp')

module.exports = function (config) {
  // move our fonts folder
  return function () {
    return gulp.src([ 'bower_components/**/*' ])
      .pipe(filter('**/*.{eot,ttf,woff,woff2}'))
      .pipe(flatten())
      .pipe(gulp.dest(config.app.dist + 'fonts'))
  }
}
