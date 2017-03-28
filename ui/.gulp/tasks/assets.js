var gulp = require('gulp')

module.exports = function (config) {
  // move everything in the assets folder to distribution
  return function () {
    return gulp.src([ config.app.src + 'assets/**/*' ])
      .pipe(gulp.dest(config.app.dist + 'assets'))
  }
}
