var concat = require('gulp-concat')
var gulp = require('gulp')

module.exports = function (config) {
  // move script files over
  return function () {
    var stream = gulp.src(config.files.scripts)
    return stream.pipe(gulp.dest(config.app.dist))
  }
}
