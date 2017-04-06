var clean = require('gulp-clean')
var gulp = require('gulp')

module.exports = function (config) {
  return function () {
    return gulp.src(config.app.dist).pipe(clean())
  }
}
