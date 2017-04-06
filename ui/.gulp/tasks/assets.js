var gulp = require('gulp')

module.exports = function (config) {
  return function () {
    return gulp.src([ config.app.src + 'assets/**/*' ])
      .pipe(gulp.dest(config.app.dist + 'assets'))
  }
}
