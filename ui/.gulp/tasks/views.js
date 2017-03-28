var gulp = require('gulp')
var minifyHtml = require('gulp-htmlmin')
var tmplCache = require('gulp-angular-templatecache')

module.exports = function (config) {
  // move our html views to a template cache folder so each one
  // doesn't need to be happen as an ajax request
  return function () {
    return gulp.src(config.files.views)
      .pipe(minifyHtml({ collapseWhitespace: true }))
      .pipe(tmplCache('template-cache.js', { module: 'app' }))
      .pipe(gulp.dest(config.app.dist))
  }
}
