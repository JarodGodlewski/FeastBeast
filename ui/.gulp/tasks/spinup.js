var browserSync = require('browser-sync')
var gulp = require('gulp')
var runSequence = require('run-sequence')

module.exports = function (config) {
  return function () {
    browserSync.init({
      server: {
        baseDir: config.app.dist,
        startPath: '/'
      },
      online: false
    })
    gulp.watch(config.files.scripts).on('change', function (obj) {
      runSequence(['scripts', 'html'], browserSync.reload)
    })
    gulp.watch(config.files.views).on('change', function () {
      runSequence(['views', 'html', 'scripts'], browserSync.reload)
    })
    gulp.watch(config.files.css).on('change', function () {
      runSequence(['scripts'], browserSync.reload)
    })
    gulp.watch(config.files.less).on('change', function () {
      runSequence(['styles'], browserSync.reload)
    })
    gulp.watch('app/index.html').on('change', function () {
      runSequence('html', browserSync.reload)
    })
  }
}
