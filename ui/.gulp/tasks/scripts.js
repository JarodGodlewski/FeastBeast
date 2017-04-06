var concat = require('gulp-concat')
var gulp = require('gulp')

module.exports = function (config) {
  return function () {
    var stream = gulp.src(config.files.scripts)
    return stream.pipe(gulp.dest(config.app.dist))
  }
}
